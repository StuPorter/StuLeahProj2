var express           = require('express'),
    SearchController  = express.Router();
    // Lawyer            = require('../models/lawyer');

SearchController.route('/?')
// GET
// --------
  .get(function( req, res, next) {
    res.render('search',{})
  });


  module.exports = SearchController;
