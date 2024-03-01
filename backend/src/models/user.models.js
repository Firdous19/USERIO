const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

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
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const saltRounds = 10;
userSchema.pre("save", async function (next) {
  //arrow function doesnot have access to this
  console.log(this.password);
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, saltRounds);
  next();
});

const User = model("User", userSchema);

module.exports = User;
