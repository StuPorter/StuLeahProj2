var express           = require('express'),
    SearchController  = express.Router(),
    Lawyer            = require('../models/lawyer');




SearchController.route('/?')
// GET
// --------
  .get(function(req, res, next) {
    res.render('search',{})
  })




//   .get(function( req, res, next) {
//     Lawyer.find({city: 'africa'}, function (err, lawyer) {
//       res.json(lawyer)
//   console.log(Lawyer)
//   res.render('home', {lawyers: lawyer})
//   })
// });
    

  //   console.log(req.body)
  //   res.render('search',{
  //     name: req.body.name,
  //   });
  // })


  module.exports = SearchController;
