var config = require('../config');
var request = require('request');
var logger = require('./logger');

var notifier =  {

    "processDropoff" : function(endPoint, activities) {
        request.post(endPoint,
                      { form: { "rawJson": JSON.stringify(activities) } },
                      function (error, response, body) {
                        if (error) {
                          logger.error('error', error);
                          logger.error('error response', response);
                          logger.error('error body', body);
                        }
                      }
        );
     },
     "processConvert" : function(activity) {
        try {
            var endPoint = config.convertEndpoint[activity.tenant];
            delete activity.tenant;

            request.post(endPoint,
                        { form: { "rawJson": JSON.stringify(activity) } },
                        function (error, response, body) {
                            if (error) {
                                logger.error('error', error);
                                logger.error('error response', response);
                                logger.error('error body', body);                       
                            }
                        }
            );
        } catch (e) {
            logger.error('problem causing activity : ' + JSON.stringify(activity), e);
        }
     }
}

module.exports = notifier;
