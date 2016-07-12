// Lawyer Model
// ----------
// Representation of a lawyer as an object

var mongoose = require('mongoose');


var LawyerSchema = new mongoose.Schema({
  company_name:     String,
  primary_contact:  String,
  address_1:        String,
  address_2:        String,
  city:             String,
  state:            String,
  zip:              String,
  phone:            String,
  email:            String,
  summary:          String,
  username:         String,
  password:         String,
  Divorce:          Boolean,
  childSupport:     Boolean,
  childCustody:     Boolean
}, {
  strict: false
});

//  Declare Lawyer as the new  model name and assign the schema to this model
// in the second argument
module.exports = mongoose.model('Lawyer', LawyerSchema);
