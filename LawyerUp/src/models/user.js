// User Model
// ----------
// Representation of a user as an object

var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
  name:     String,
  phone:    String,
  email:    String,
  username: String,
  password: String
}, {
  strict: false
});

// We are declaring User as the new  model name and assigning the schema to this model
// in the second argument
module.exports = mongoose.model('User', UserSchema);
