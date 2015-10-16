var express = require('express');
var router = express.Router();
var path = require('path');
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, "../views/index.html"))
});

router.post('/', passport.authenticate('local', {
  successRedirect:'/users/home',
  failureRedirect: '/'
}));

module.exports = router;
