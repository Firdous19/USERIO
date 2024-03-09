const jwt = require("jsonwebtoken");
const User = require("../models/user.models");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");

async function userAuthentication(req, res, next) {
  try {
    console.log("Cookies", req.cookies);
    const token = req.cookies?.token;

    console.log("Token", token);

    const verifytoken = await jwt.verify(token, process.env.JWT_SECRET);

    if (!verifytoken) {
      return res.status(401).json(new ApiError(401, "Unauthorized"));
    }

    const user = await User.findOne({
      _id: verifytoken.id,
      accessToken: token,
    });

    if (!user) {
      return res.status(400).json(new ApiError(400, "User Not Found"));
    }

    req.token = token;
    req.user = user;
    res.status(200).json(new ApiResponse(200));
    next();
  } catch (error) {
    res.status(402).json(new ApiError(402, "Unauthorized from Middleware"));
  }
}

module.exports = {
  userAuthentication,
};
