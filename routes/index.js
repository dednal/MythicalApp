var express = require('express');
var router = express.Router();
module.exports = router;

module.exports = function(passport){

  /* GET home page. */
  router.get('/', function(req, res) {
    res.render('index', { title: 'login page', message: req.flash('message') });
  });

  //router.post('/login', passport.authenticate('login', {
  //  successRedirect: '/home',
  //  failureRedirect: '/',
  //  failureFlash : true
  //}));

  router.get('/signup', function(req, res) {
    res.render('signup', { message: req.flash('message') });
  });

  //router.post('/signup', passport.authenticate('signup', {
  //  successRedirect: '/home',
  //  failureRedirect: '/signup',
  //  failureFlash : true
  //}));

  router.get('/home', isLoggedIn, function(req, res) {
    res.render('home', {
      user: req.user
    });
  });

  router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  return router;
};

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }

  res.redirect('/');
};

