var express           = require('express'),
    SearchController  = express.Router();

 
SearchController.route('/search')
  // GET /
  // -----
  // Serve the homepage
  .get(function(req, res, next) {
    res.render('search', {});
  })


module.exports = SearchController;
