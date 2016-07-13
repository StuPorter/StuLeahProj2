// Lawyers Registration page Controller
// ==============================
// Controller for handling Lawyer Reg/profile creation

var express           = require('express'),
    LawyerController  = express.Router(),
    Lawyer            = require('../models/lawyer'),
    bcrypt            = require('bcrypt'),
    fs                = require('fs');

// LawyerController.route('/:id/?')
// //SINGLE ID FIND
// .get(function(req, res, next) {
//     var id = req.params.id;
//     Lawyer.findById(id, function(err, user)  {
//       if (err) { 
//         console.log(err);
//       } else {
//         // console.log('THE ID WORKED')
//         res.json(user)
//       }
//     }); 
//   })
//  // PATCH METHOD 
//   .patch(function(req, res, next)  {
//     var id = req.params.id;
//     Lawyer.findByIdAndUpdate(id, {email: 'NewEmail@gmail.com'}, function(err, user)  {
//       if (err) {
//         console.log(err);
//       } else {
//         res.json('A change has been made')
//       }
//     }); 
//   });

LawyerController.route('/?')
// GET
// -------
// Render the lawyer registration page
  .get(function(req, res, next) {
    res.render('lawyersReg', {});
    console.log('THIS GET FUNCTION (FOR LAWYERS) WORKS')
  })  
  .post(function(req, res, next) {
    bcrypt.hash(req.body.password, 10, function(err, hash) {
      // save lawyer
      Lawyer.create({
        companyName:     req.body.companyName,
        primaryContact:  req.body.primaryContact,
        address1:        req.body.address1,
        address2:        req.body.address2,
        city:             req.body.city,
        state:            req.body.state,
        zip:              req.body.zip,
        phone:            req.body.phone,
        email:            req.body.email,
        summary:          req.body.summary,
        username:         req.body.username,
        password:         hash,
        priceRange:       req.body.priceRange,
        divorce:          req.body.divorce,
        childSupport:     req.body.childSupport,
        childCustody:     req.body.childCustody

      }, function(err, lawyer) {
        if (err) {
          console.log(err);
          res.render('/?', {error: err});
        } else {
          res.redirect('/profmade');
          console.log('LAWYER POST FUNCTION WORKS')
        }
      });
    });
  });



module.exports = LawyerController;

