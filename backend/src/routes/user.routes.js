const { Router } = require("express");
const router = Router();
const { userAuthentication } = require("../middleware/auth");
const { handleUserSignUp } = require("../controllers/user.controller");

router.route("/").get((req, res) => {
  res.send("Welcome to the Server");
});

router.route("/aboutme").get(userAuthentication, (req, res) => {
  res.send("About me Page");
});

router.route("/signin").get((req, res) => {
  res.send("Sign In Page");
});

router
  .route("/signup")
  .get((req, res) => {
    res.send("Sign Up Page");
  })
  .post(handleUserSignUp);

module.exports = router;
