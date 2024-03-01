const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const User = require("../models/user.models");

async function handleUserSignUp(req, res) {
  const { userName, email, password } = req.body;

  if (!userName || !email || !password) {
    return res.send(new ApiError(400, "All field are required"));
  }

  if (!email.includes("@gmail.com")) {
    return res.send(new ApiError(401, "Invalid Email"));
  }

  const isUserExisted = await User.findOne({ $or: [{ email }, { userName }] });

  if (isUserExisted) {
    return res.send(new ApiError(401, "username or email already exists"));
  }

  const data = await User.create({ userName, email, password });

  return res.send(new ApiResponse(200, data, "User Created Successfully"));
}

module.exports = {
  handleUserSignUp,
};
