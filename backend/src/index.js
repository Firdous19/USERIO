require("dotenv").config();
const app = require("./app");
const connectDatabase = require("./DB/database");
const PORT = process.env.PORT || 8000;

connectDatabase()
  .then(() => {
    app.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`));
  })
  .catch((err) => console.log("Error while connecting database"));
  