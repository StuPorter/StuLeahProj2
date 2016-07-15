var mongoose = require('mongoose');

var connectionString = process.env.NODE_ENV === 'production' ? '  mongodb://leah:12825ln@ds021895.mlab.com:21895/lawyerup ' : 'mongodb://localhost/lawyerup';

mongoose.connect(connectionString);

mongoose.connection.on('connected', function() {
  console.log('mongoose connected to ' + connectionString);
});

mongoose.connection.on('error', function(err) {
  console.log('mongoose connected error ' + err);
});

mongoose.connection.on('disconnected', function() {
  console.log('mongoose disconnected ') ;
});
