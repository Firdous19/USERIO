require("dotenv").config();
const mongoose = require("mongoose");

async function connectDatabase() {
  try {
    const res = await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Database Connected Succesfully", res.connections[0]._connectionString);
  } catch (error) {
    console.log("Failed To connect Database", error);
  }
}

module.exports = connectDatabase;
