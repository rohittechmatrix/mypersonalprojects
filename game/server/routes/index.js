(function() {
 
  'use strict';
  var express = require('express');
  var router = express.Router();
   var mongojs = require("mongojs");
   var db = mongojs("yatragame",  ['user' , 'question']);

  /* GET home page. */
  router.get('/', function(req, res) {
    res.render('index');
  });
 
  router.get('/user', function(req, res) {
    res.render('userList');
  });
    
  router.get('/api/question', function(req, res) {
    db.question.find(function(err, data) {
      res.json(data);
    });
  });
    
  router.get('/api/getUser', function(req, res) {
    db.user.find(function(err, data) {
      res.json(data);
    });
  });
 
  router.post('/api/user', function(req, res) {
    db.user.insert(req.body, function(err, data) {
      res.json(data);
    });
 
  });


  module.exports = router;
 
}());