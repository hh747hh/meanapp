var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
var morgan = require("morgan");
var mongoose = require("mongoose");
var User = require("./app/models/user");

app.use(morgan("dev"));

//DB Config
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
// app.get("/", function(req, res) {
//   res.send("Hello World");
// });
app.get("/home", function(req, res) {
  res.send("Hello home");
});

app.listen(port, function() {
  console.log("Running the server on port " + port);
});
