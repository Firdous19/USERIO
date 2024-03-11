const { Router } = require("express");
const router = Router();
const { userAuthentication } = require("../middleware/auth");
const {
  handleUserSignUp,
  handleUserSignIn,
  handleUserContactForm,
  handleUserLogout,
} = require("../controllers/user.controller");

router.route("/").get(userAuthentication, (req, res) => {
  res.send({ status: 200, user: req.user });
});

router
  .route("/signin")
  .get((req, res) => {
    res.send("Sign In Page");
  })
  .post(handleUserSignIn);

router
  .route("/signup")
  .get((req, res) => {
    res.send("Sign Up Page");
  })
  .post(handleUserSignUp);

router.route("/about").get(userAuthentication, (req, res) => {
  res.status(200).send({ status: 200, user: req.user });
});

router
  .route("/contact")
  .get(userAuthentication, (req, res) => {
    res.status(200).send({ status: 200, user: req.user });
  })
  .post(handleUserContactForm);

router.route("/logout").get((req, res) => {
  res.clearCookie("token");
  return res
    .status(200)
    .json(new ApiResponse(200, "User logged out Successfully"));
});

module.exports = router;
