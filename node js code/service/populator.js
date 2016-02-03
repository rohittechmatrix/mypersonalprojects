var timer = require('./timer');
var config = require('../config');
var notifier = require('./notifier');
var logger = require('./logger');

var populator = {

    "data": {
        "activities" : {}    
    },
    
    "init" : function() {
        setInterval(this._timed, config.JOB_INTERVAL_IN_MILLISECONDS);
    },
    
    "_timed" : function() {
        try {
            timer.handleDropOffs(populator.data.activities);
        } catch (e) {
            logger.error('error for activities : ' + JSON.stringify(populator.data.activities), e);
        } 
    },

    "handle" : function(activity) {
        activity.timestamp = new Date().getTime();

        if (activity.stage == 0) {
            this._add(activity);
        } else if (activity.stage > 0) {
            this._update(activity);
        } else {
            this._exit(activity);
        }
    },

    "_add" : function(activity) {
        this.data.activities[activity.id] = activity;
    },

    "_update" : function (activity) {
        this._merge(activity);
    },

    "_merge" : function(activity) {
        var existingActivity = this.data.activities[activity.id];
        if (typeof existingActivity != 'undefined') {
            for (var attr in activity) {
                existingActivity[attr] = activity[attr];
            }
        }
        return existingActivity;
    },

    "_exit" : function(activity) { 
        var existingUserActivity = this._merge(activity);
        if (typeof existingUserActivity != 'undefined') {
            notifier.processConvert(existingUserActivity);
            delete this.data.activities[existingUserActivity.id];
        }        
    }   
}

module.exports = populator;
