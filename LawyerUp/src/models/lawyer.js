// Lawyer Model
// ----------
// Representation of a lawyer as an object

var mongoose = require('mongoose');


var LawyerSchema = new mongoose.Schema({
  companyName:          String,
  primaryContact:       String,
  address1:             String,
  address2:             String,
  city:                 String,
  state:                String,
  zip:                  String,
  phone:                String,
  email:                String,
  summary:              String,
  username:             String,
  password:             String,
  divorce:              Boolean,
  childSupport:         Boolean,
  childCustody:         Boolean,
  elderLaw:             Boolean,
  socialSecurity:       Boolean,
  workersCompensation:  Boolean,
  citizenship:          Boolean,
  greenCards:           Boolean,
  deportation:          Boolean,
  bankruptcy:           Boolean,
  foreclosure:          Boolean,
  personalBankruptcy:   Boolean,
  landlord:             Boolean,
  realEstate:           Boolean,
  neighborPets:         Boolean,
  carAccidents:         Boolean,
  medicalMalpractice:   Boolean,
  slipOrFall:           Boolean,
  duiDwi:               Boolean,
  drugCrimes:           Boolean,
  wrongfulTermination:  Boolean,
  employeeBenefits:     Boolean,
  wageAndLaws:          Boolean,
  businessTaxes:        Boolean,
  personalIncomeTax:    Boolean,
  audits:               Boolean
}, {
  strict: false
});

//  Declare Lawyer as the new  model name and assign the schema to this model
// in the second argument
module.exports = mongoose.model('Lawyer', LawyerSchema);
