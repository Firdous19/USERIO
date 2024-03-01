function userAuthentication(req, res, next) {
  console.log("Hello From middleware");
  next();
}

module.exports = {
  userAuthentication,
};
