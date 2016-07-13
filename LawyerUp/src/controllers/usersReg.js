var express         = require('express'),
    UserController  = express.Router(),
    User            = require('../models/user'),
    bcrypt          = require('bcrypt');




UserController.route('/:id/?')
  .get(function(req, res, next) {
    var id = req.params.id
    User.findById(id, function(err, user) {
      console.log('---below is from user find by id------')
      console.log(user)
      res.render('userProfile',{user: user})
    })
  })
// PATCH
//------------ 
 .patch(function(req, res, next) {
    var id = req.params.id
    User.findByIdAndUpdate(id,function(err, user) {
      console.log(user)
      res.json(user)
    })
  });




UserController.route('/?')
  // GET /
  // -----
  // Serve the homepage
  .get(function(req, res, next) {
    res.render('usersReg', {});
    console.log('THIS GET FUNCTION WORKS');
  })
  // POST
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
          res.redirect('/userReg', {error: err});
          console.log('The error log')
        } else {
          res.redirect('/search')
          console.log('THE POST FUNCTION IS WORKING');
        }
      });
    });
  });  


module.exports = UserController;
