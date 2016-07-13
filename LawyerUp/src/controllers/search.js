 var express           = require('express'),
    mongoose           = require('mongoose');
    SearchController   = express.Router(),
    Lawyer             = require('../models/lawyer');







SearchController.route('/:id/?')  
// GET
// ---------
// get single lawyer from search and render info to results page
.get(function(req, res, next) {
    var id = req.params.id
    Lawyer.findById(id, function(err, lawyer) {
      console.log(lawyer)
      res.json(lawyer)
    })
  })





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
          { $or: [{city: req.body.city}]},
          { $or: [{childSupport: true}, {divorce: true}, {childCustody: true} ]},
          
      ]
  }, function (err, lawyer) {
     if (err) {
          console.log(err);
          res.render('/?', {error: err});
        } else {
          res.render('results',{ lawyer: lawyer})
          console.log(lawyer)      
        }
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
