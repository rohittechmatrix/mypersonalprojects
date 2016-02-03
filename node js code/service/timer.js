var notifier = require('./notifier');
var config = require('../config');
var logger = require('./logger');

var timer = {

    "dropoffsBatch" : {
         "dom2" :  [],
         "int2" : []
    },    

    "handleDropOffs" : function(activities) {
        var jobRunTime = new Date().getTime();

        for (var activityId in activities) {
            if (activities.hasOwnProperty(activityId)) {

                var activity = activities[activityId]
                if (this._hasExpired(activity, jobRunTime)) {                  
                    this._collectInBatch(activity); 
                    delete activities[activityId];
                }

            }
        }
        this._processDropOffs();
    },
    
    "_collectInBatch" : function(activity) {
        try {
            var tenant = activity.tenant;
            delete activity.tenant;
            this.dropoffsBatch[tenant].push(activity);
        } catch (e) {
              logger.error('problematic activity : ' + JSON.stringify(activity), e);
        }
    },

    "_processDropOffs" : function() {
        for (var tenant in this.dropoffsBatch) {
                if (this.dropoffsBatch[tenant].length == 0) continue;

                notifier.processDropoff(config.dropoffEndpoint[tenant], 
                                        this.dropoffsBatch[tenant]);
                this.dropoffsBatch[tenant] = [];
                
        }
    },

    "_hasExpired" : function(activity, jobRunTime) {
        if (activity.timestamp + config.DROPOUT_TIMELIMIT_IN_MILLISECONDS < jobRunTime) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = timer;
