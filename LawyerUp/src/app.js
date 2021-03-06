// App.js
// ======
// This file serves as the main
// server startup script.

// Require dependencies
// --------------------
var dotenv      = require('dotenv').config(),
    express     = require('express'),
    app         = express(),
    exphbs      = require('express-handlebars'),
    bodyParser  = require('body-parser'),
    session     = require('express-session');
    dotenv      = require('dotenv').config();

// Configuration
// -------------
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended: true}))

// Connect to database
// -------------------
require('./config/db');


///// Configure session middleware
app.use(session({
  name: 'loginsession',
  resave: false,
  saveUninitialized: false,
  secret: 'befroiehqoib'
}))



// Middleware
// ----------
app.use(express.static(__dirname + '/public')); // Serve static files
app.use(require('./controllers/home'));
app.use('/userreg', require('./controllers/usersReg'));
app.use('/lawyerreg', require('./controllers/lawyersreg'));
app.use('/?', function(req, res, next) {
  if(req.session.isLoggedIn === true) {
    return next();
  }else{
    res.redirect('/?')
  }
})
app.use('/search', require('./controllers/search'));



// app.use('/profmade',  require('./controllers/profmade'));

//USING ID to get the ID of the LAWYER REG POST
// REQUIRING CONTROLLERS/LAWYERSREG because that
// is where the post information is filled in***




// Start the server
// ----------------
var server = app.listen(process.env.PORT || 9000, function() {
  console.log('App is running at http://localhost:' + server.address().port);
});
