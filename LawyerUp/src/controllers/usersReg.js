var express         = require('express'),
    UserController  = express.Router(),
    User            = require(__dirname + '/../models/user'),
    bcrypt          = require('bcrypt');

UserController.route('/userReg')
  // GET /
  // -----
  // Serve the homepage
  .get(function(req, res, next) {
    res.render('usersReg', {});
  })

  .post(function(req, res, next) {
    bcrypt.hash(req.body.password, 10, function(err, hash) {
      // Save user inside here
      User.create({
        name:     req.body.name,
        phone:    req.body.name,
        email:    req.body.name,
        username: req.body.username,
        password: hash
      }, function(err, user) {
        if (err) {
          console.log(err);
          res.render('/?', {error: err});
        } else {
          res.redirect('/results');
        }
      });
    });
  });


module.exports = UserController;


