/**
 * Created by usuario on 10/16/15.
 */
var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var Users = require('../models/User');

router.get('/registerLanding', function(req, res, next){
   res.sendFile(path.join(__dirname, '../views/registerLanding.html'));
});

router.get('/', function(req, res, next){
    res.sendFile(path.join(__dirname, '../views/register.html'));
});


router.post('/', function(req, res, next){
   Users.create(req.body, function(err, post){
       if(err) {
           next(err);
       } else {
           res.redirect('/register/registerLanding');
       }

   })
});

module.exports = router;