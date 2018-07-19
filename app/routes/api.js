var User = require("../models/user");

module.exports = {

//http://localhost:5000/users
app.post("/users", function(req, res) {
  var user = new User();
  user.username = req.body.username;
  user.password = req.body.password;
  user.email = req.body.email;
  invalid =
    req.body.username === null ||
    req.body.username === "" ||
    req.body.password === null ||
    req.body.password === "" ||
    req.body.email === null ||
    req.body.email === "";

  if (invalid) {
    res.send("Email, Password and Username must be provided");
  } else {
    user.save(function(err) {
      if (err) {
        res.send("UserName or Email already exist.");
      } else {
        res.send("User created!");
      }
    });
  }
});



}