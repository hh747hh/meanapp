var express = require("express");
var app = express();
var port = process.env.PORT || 5000;
var morgan = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var router = express.Router();
var appRoutes = require("./app/routes/api")(router);
var path = require("path");

app.use(morgan("dev"));
app.use(bodyParser.json()); //for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(express.static(__dirname + "/public"));
app.use("/api", appRoutes);

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// app.get("/", function(req, res) {
//   res.send("Hello World");
// });
// app.get("/home", function(req, res) {
//   res.send("Hello home");
// });

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/app/views/index.html"));
});

app.listen(port, function() {
  console.log("Running the server on port " + port);
});
