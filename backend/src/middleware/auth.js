const ApiError = require("../utils/ApiError");

function userAuthentication(req, res, next) {
  // console.log("Hello From middleware");
  // const token = req.cookies?.token;
  // console.log(token);
  // if (!token) {
  //   return res.status(401).json(new ApiError(401, "Please Login"));
  // }

  next();
}

module.exports = {
  userAuthentication,
};
