var express           = require('express'),
    mongoose = require('mongoose');
    SearchController  = express.Router(),
    Lawyer            = require('../models/lawyer');




SearchController.route('/?')
// GET
// --------
  .get(function(req, res, next) {
    res.render('search',{})
    console.log('THE USER IS LOGGED IN GET FUNCTION WORKS')
  })
  // POST
  // -----------
  // Search performed loop through db return results
  .post(function(req, res, next) {
    console.log(req.body)
    Lawyer.find({ 
      $and: [
          { $or: [{city: req.body.city}]},
          { $or: [{childSupport: true}, {divorce: true}, {childCustody: true} ]},
          
      ]
  }, function (err, lawyer) {
     res.send(lawyer)
     console.log(lawyer)
  })
});    

//maybe later add IF ELSE statements for error handling


  module.exports = SearchController;





// Lawyer.find({ 
//       city: req.body.city, 
//       divorce: true ,
//       childSupport: true,
//       childCustody: true,

//     }, function(err, lawyer) {
//       res.send(lawyer)
//       console.log(lawyer)
//     })

//   });

// city: req.body.city
