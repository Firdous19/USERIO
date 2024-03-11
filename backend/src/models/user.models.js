const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ApiError = require("../utils/ApiError");

const messageSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      lowerCase: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
    },
    accessToken: {
      type: String,
    },
    messages: [
      {
        type: messageSchema,
      },
    ],
  },
  { timestamps: true }
);

const saltRounds = 10;
userSchema.pre("save", async function (next) {
  //arrow function doesnot have access to this
  // console.log(this.password);
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, saltRounds);
  next();
});

//Function to check the user password and the hashed password stored in the database
userSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.password);
  return result;
};

//generate Access Token
userSchema.methods.generateAccessToken = function () {
  try {
    return jwt.sign(
      {
        id: this._id,
        userName: this.userName,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
  } catch (error) {
    throw new ApiError(500, "Error in generating token");
  }
};

const User = model("User", userSchema);

module.exports = User;
