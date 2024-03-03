const express = require("express");
const app = express();
const userRouter = require("./routes/user.routes");

app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.json());
app.use("/", userRouter);

module.exports = app;
