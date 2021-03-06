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
      console.log('---below is from lawyer find by id------')
      console.log(lawyer)
      res.render('lawyerProfile',{lawyer: lawyer})
    })
  })




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
          { $or: [{childSupport: true}, {divorce: true}, {childCustody: true}, {elderLaw: true}, {socialSecurity: true}, 
          {workersCompensation: true}, {citizenship: true}, {greenCards: true}, {deportation: true}, {bankruptcy: true}, {foreclosure: true},
          {personalBankruptcy: true}, {landlord: true}, {realEstate: true}, {neighborPets: true}, {carAccidents: true},
          {medicalMalpractice: true}, {slipOrFall: true}, {duiDwi: true}, {drugCrimes: true}, {wrongfulTermination: true},
          {employeeBenefits: true}, {wageAndLaws: true}, {businessTaxes: true}, {personalIncomeTax: true}, {audits: true} ]},
          
      ]
  }, function (err, lawyer) {
     if (err) {
          console.log(err);
          res.render('/?', {error: err});      

        } else if (1 > lawyer.length) {
            
            res.render('results', {message: "There are no Lawyers that match your search criteria. Please try again."})
          } else {
          console.log(typeof lawyer, 'this is else', lawyer.length, 'thuis the lenght')
          res.render('results',{ lawyer: lawyer})
             

        }
  })
});    


  module.exports = SearchController;





