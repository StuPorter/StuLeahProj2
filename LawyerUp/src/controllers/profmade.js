var express             = require('express'),
    Lawyer              = require('../models/lawyer'),
    profmadeController  = express.Router();


// NOW I WANT TO PULL A SINGLE ID AND BE ABLE TO PATCH 
// PART OF ITS PROPERTIES

profmadeController.route('/?')
// GET
// --------
  .get(function( req, res, next) {
    res.render('profmade',{})
    console.log('THE PROFILE HAS BEEN MADE GET FUNCTION WORKS')
  });

//   //POST FUNCTION


//   // module.exports = profmadeController;


profmadeController.route('/?')
// profmadeController.route('/:id/?')
//SINGLE ID FIND
.get(function(req, res, next) {
    var id = req.params.id;
    Lawyer.findById(id, function(err, user)  {
      if (err) {
        console.log(err);
      } else {
        console.log('GET FUNCTION WORKS FOR SELECTING SINGLE ID')
        // res.json(lawyer)
        res.render('profmade',{})
      }
    }); 
  })
 // PATCH METHOD 
  .patch(function(req, res, next)  {
    var id = req.params.id;
    Lawyer.findByIdAndUpdate(id, {email: 'NewEmail@gmail.com'}, function(err, user)  {
      if (err) {
        console.log(err);
      } else {
        res.json('A change has been made')
        console.log('THE PATCH FUNCTION IS ENABLED')
      }
    }); 
  });

  module.exports = profmadeController;

//   profmadeController.route('/?')
// // GET
// // --------
//   .get(function( req, res, next) {
//     res.render('profmade',{})
//     console.log('THE PROFILE HAS BEEN MADE GET FUNCTION WORKS')
//   });


//   module.exports = profmadeController;

//can you have 2 routes on the same controller?
//What I am trying to do here is 1. Pull up a profile made page
// and 2 have the data from the LAWYERREG POST ROUTE show up.

// from there I want to 
