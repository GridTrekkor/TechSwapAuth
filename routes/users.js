var express = require('express');
var router = express.Router();
var path = require('path');


/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("auth = " + req.isAuthenticated());
  res.json(req.isAuthenticated());
});

router.get('/home', function(req, res, next) {
  console.log('hit /home endpoint');
  res.sendFile(path.join(__dirname, '../views/toDoList.html'));
});

module.exports = router;