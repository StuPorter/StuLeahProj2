var express         = require('express'),
    HomeController  = express.Router();
    // User            = require(__dirname + '/../models/user'),
    // bcrypt          = require('bcrypt');

HomeController.route('/?')
  // GET /
  // -----
  // Serve the homepage
  .get(function(req, res, next) {
    res.render('home', {});
  })


module.exports = HomeController;
