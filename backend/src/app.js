const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/user.routes");

app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: ["https://mern-woad.vercel.app", "http://localhost:5173"],
  })
);
app.use("/", userRouter);

module.exports = app;
