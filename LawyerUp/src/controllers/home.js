var express         = require('express'),
    HomeController  = express.Router();
    User            = require(__dirname + '/../models/user'),
    bcrypt          = require('bcrypt');

HomeController.route('/?')
  // GET /
  // -----
  // Serve the homepage
  .get(function(req, res, next) {
    res.render('home', {});
  })
  // POST
  // ----------
  // Serve the profile page after log in
  .post(function(req, res, next) {
    var id = req.body.id
    
    })
  });


module.exports = HomeController;
