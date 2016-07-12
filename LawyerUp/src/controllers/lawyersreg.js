// Lawyers Registration page Controller
// ==============================
// Controller for handling Lawyer Reg/profile creation

var express           = require('express'),
    LawyerController  = express.Router(),
    Lawyer            = require('../models/lawyer');

LawyerController.route('/?')
// GET
// -------
// Render the lawyer registration page
  .get(function(req, res, next) {
    res.render('lawyersReg'),{}
  })


module.exports = LawyerController;

// Add bcrypt and write post function
// create full CRUD operations
