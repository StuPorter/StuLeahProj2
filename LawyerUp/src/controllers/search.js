var express           = require('express'),
    SearchController  = express.Router();




SearchController.route('/?')
// GET
// --------
  .get(function( req, res, next) {
    res.render('search',{})
    console.log('THE USER IS LOGGED IN GET FUNCTION WORKS')
  });


  module.exports = SearchController;
