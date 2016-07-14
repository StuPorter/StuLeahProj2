var express         = require('express'),
    HomeController  = express.Router();
    User            = require(__dirname + '/../models/user'),
    bcrypt          = require('bcrypt');

HomeController.route('/?')
  // GET /
  // -----
  // Serve the homepage
  .get(function(req, res, next) {
    console.log("Get function is working")
    res.render('home', {});
  })
  // POST
  // ----------
  // Find existing user in database
  // Serve the search page after succesful log in
  .post(function(req, res, next) {
    console.log("Post functon is working")
    User.findOne({username: req.body.username},function(err, user) {
      if(err || !user){
        console.log(err);
        res.render('home',{ message:req.session.isLoggedIn ? true: "Username is not found!"});
      } else {
        bcrypt.compare(req.body.password, user.password, function(err, result) {
          if(err){
            console.log(err);
            res.send('ERROR:' + err);
          } else if(result){
            console.log(user)
            req.session.isLoggedIn = true;
            req.session.userId = user._id;
            res.redirect('/search');
          }else{
            res.render('home', {
              message: req.session.isLoggedIn ? true: "Your password is incorrect, please try again!"
            });
          }
        });
      }
    })
  });
    


module.exports = HomeController;

// .post(function(req, res, next) {
//     if (req.session.isLoggedIn = true){
//         req.session.userId = user._id;
//         res.redirect('/search');
//     } else {
//         res.redirect('/');
//     }
    
//     })
//   });

// .post(function(req, res, next) {
//     User.findOne({username: req.body.username}, function(err, user) {
//       if(err ||!user){
//         console.log(err)
//         res.render('home',{
//           message: req.session.isLoggedIn ? true:"Username not found!"
//         })
        
//       }else{
//         // compare the password entered with the hashed db password
//         bcrpt.compare(req.body.password, user.password, function(err, result) {
//           if(err){
//             console.log(err);
//             res.send('ERROR:' + err);
//           }
//           else if(result){
//             console.log(user)
//             req.session.isLoggedIn = true;
//             req.session.userId = user._id;
//             res.redirect('/search');
//           }else{
//             res.render('home',{
//               message: req.session.isLoggedIn?true: "Your password is incorrect, please try again!"
//             });
//           }
//         });
//       }
//     });
