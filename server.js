const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");

const { connectDB } = require("./utils/db.js");

const logger = require("./utils/logger.js");
const appError = require("./utils/appError.js");
const gobalErrorHandler = require("./controller/errorCont.js");

const app = express();

// Middleware & Routes
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});
app.use("/wishList", require("./routes/wishList.js"));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API from the backend server" });
});
app.all("*", (req, res, next) => {
  next(new appError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(gobalErrorHandler);

connectDB().then(() => {
  app.listen(5000, () => {
    console.log("Server is running on port 5000");
  });
});
