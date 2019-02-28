var db = require('../models');
var express = require('express');
var router = express.Router();
// const userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, username: "somebody"},
    {id: 2, username: "Somebody else"}
  ]);
});

module.exports = router;