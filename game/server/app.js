(function() {
  'use strict';
 
  var express = require('express');
  var path = require('path');
  var logger = require('morgan');
  var cookieParser = require('cookie-parser');
  var bodyParser = require('body-parser');
  var runner = require("child_process");
  var routes = require('./routes/index');
 
  var app = express();
 
  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
 
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(cookieParser());
 
  app.use(express.static(path.join(__dirname, '../client')));
 
  app.use('/', routes);
 
  app.set('port', process.env.PORT || 3000);
  
  function runScript(exists, file, param, response)
{
  if(!exists) return sendError(404, 'File not found', response);
  runner.exec("php " + file + " " + param,
   function(err, stdout, stderr) { sendData(err, stdout, stderr, response); });
}


  var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
  });
 
  module.exports = app;
}());