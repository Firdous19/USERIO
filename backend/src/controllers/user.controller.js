const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");
const User = require("../models/user.models");

async function generateToken(user) {
  try {
    const token = user.generateAccessToken();
    user.accessToken = token;
    await user.save({ validateBeforeSave: false });
    return token;
  } catch (error) {
    throw new ApiError(500, "Error in storing token in database");
  }
}

const handleUserSignUp = asyncHandler(async function (req, res) {
  const { userName, email, phone, profession, password, confirmPassword } =
    req.body;

  if (
    !userName ||
    !email ||
    !password ||
    !phone ||
    !profession ||
    !confirmPassword
  ) {
    return res.status(400).json(new ApiError(400, "All field are required"));
  }

  if (!email.includes("@gmail.com")) {
    return res.status(401).json(new ApiError(401, "Invalid Email"));
  }

  if (password !== confirmPassword) {
    return res
      .status(400)
      .json(new ApiError(400, "Password and Confirm Password doesn't match"));
  }

  const isUserExisted = await User.findOne({ email });

  if (isUserExisted) {
    return res
      .status(401)
      .json(new ApiError(401, "Account already exists please Login"));
  }

  const data = await User.create({
    userName,
    email,
    phone,
    profession,
    password,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, data, "User Created Successfully"));
});

const handleUserSignIn = asyncHandler(async function (req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json(new ApiError(400, "All Fields are required"));
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json(new ApiError(401, "Invalid Credentials"));
  }

  const result = await user.checkPassword(password);

  if (!result) {
    return res.status(401).json(new ApiError(401, "Invalid Credentials"));
  }

  const token = await generateToken(user);

  return res
    .status(200)
    .cookie("token", token, {
      httpOnly: true,
      secure: true,
    })
    .json(new ApiResponse(200, user, "Login Successfull"));
});

module.exports = {
  handleUserSignUp,
  handleUserSignIn,
};
