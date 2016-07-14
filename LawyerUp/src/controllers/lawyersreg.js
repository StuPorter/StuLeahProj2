// Lawyers Registration page Controller
// ==============================
// Controller for handling Lawyer Reg/profile creation

var express           = require('express'),
    LawyerController  = express.Router(),
    Lawyer            = require('../models/lawyer'),
    bcrypt            = require('bcrypt');

LawyerController.route('/?')
// GET
// -------
// Render the lawyer registration page
  .get(function(req, res, next) {
    res.render('lawyersReg',{});
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
        divorce:          req.body.divorce, 
        childSupport:     req.body.childSupport,
        childCustody:     req.body.childCustody
      }, function(err, lawyer) {
        if (err) {
          console.log(err);
          res.render('/?', {error: err});
        } else {
          res.redirect('/?');
          console.log('Lawyer post function is working')
          console.log(req.body)
          req.session.isLoggedIn = true;
          req.session.userId = user._id;
        }
      });
    });
  });



module.exports = LawyerController;


// create full CRUD operations
