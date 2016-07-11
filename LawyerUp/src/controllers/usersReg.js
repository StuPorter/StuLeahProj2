var express         = require('express'),
    UserController  = express.Router(),
    User            = require('../models/user'),
    bcrypt          = require('bcrypt');

UserController.route('/?')
  // GET /
  // -----
  // Serve the homepage
  .get(function(req, res, next) {
    res.render('usersReg', {});
    console.log('THIS GET FUNCTION WORKS');
  })
  .post(function(req, res, next) {
    bcrypt.hash(req.body.password, 10, function(err, hash) {
      // Save user inside here
      User.create({
        name:     req.body.name,
        phone:    req.body.phone,
        email:    req.body.email,
        username: req.body.username,
        password: hash
      }, function(err, user) {
        if (err) {
          console.log(err);
          res.render('/?', {error: err});
        } else {
          res.redirect('/search');
          console.log('THE POST FUNCTION IS WORKING')
        }
      });
    });
  });


module.exports = UserController;


