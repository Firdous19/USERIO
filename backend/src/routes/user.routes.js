const { Router } = require("express");
const router = Router();
const { userAuthentication } = require("../middleware/auth");
const {
  handleUserSignUp,
  handleUserSignIn,
} = require("../controllers/user.controller");

router.route("/").get((req, res) => {
  res.send("Welcome to the Server");
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
  res.status(200).send(user);
});
module.exports = router;
