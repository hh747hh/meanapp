var User = require("../models/user");

module.exports = function(router) {
  //http://localhost:5000/api/users
  router.post("/users", function(req, res) {
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
      res.json({
        success: false,
        message: "Email, Password and Username must be provided"
      });
    } else {
      user.save(function(err) {
        if (err) {
          res.json({
            success: false,
            message: "UserName or Email already exist."
          });
          // res.send("UserName or Email already exist.");
        } else {
          // res.send("User created!");
          res.json({ success: true, message: "User created!" });
        }
      });
    }
  });

  return router;
};
