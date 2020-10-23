const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const workoutController = require("./controllers/workoutController");
const app = express();

const PORT = process.env.PORT || 3000;
const connection = mongoose.connection;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.use(workoutController);

app.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/exercise.html"));
});

app.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/stats.html"));
});

app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});
