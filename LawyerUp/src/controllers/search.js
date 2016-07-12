var express           = require('express'),
    mongoose = require('mongoose');
    SearchController  = express.Router(),
    Lawyer            = require('../models/lawyer');




SearchController.route('/?')
// GET
// --------
  .get(function(req, res, next) {
    res.render('search',{})
  })
  // POST
  // -----------
  // Search performed loop through db return results
  .post(function(req, res, next) {
    console.log(req.body)
    Lawyer.find({ 
      $and: [
          { $or: [{divorce: true}] },
          { $or: [{childSupport: true}]},
          { $or: [{childCustody: true}]}
      ]
  }, function (err, lawyer) {
     res.send(lawyer)
     console.log(lawyer)
  })
});    
      

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
