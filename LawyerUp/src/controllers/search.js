var express           = require('express'),
    SearchController  = express.Router();




SearchController.route('/?')
// GET
// --------
  .get(function( req, res, next) {
    res.render('search',{})
  });


  module.exports = SearchController;
