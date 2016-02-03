var express = require('express');
var populator = require('../service/populator');
var config = require('../config');
var domain = require('domain');
var logger = require('../service/logger');

var router = express.Router();
populator.init();

router.post('/dropoff_monitor', function(req, res) {
    
    if (!config.ENABLED) {
        res.json({"success":false});
        return;
    }
    
    var d = domain.create();
    d.on('error', function(err) {
       logger.error(err);
    });
    d.run(function() {
      var trackingData = req.param('trackingData');
      logger.debug('received request param', trackingData);
      if(typeof trackingData != 'undefined' && trackingData.length < 500) {
        populator.handle(JSON.parse(trackingData));
      }
    });
    res.json({"success":true});
    
});

module.exports = router;
