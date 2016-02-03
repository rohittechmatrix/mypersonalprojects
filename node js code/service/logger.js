var winston = require('winston');
var config = require('../config');

winston.emitErrs = true;

var logger = new winston.Logger({
    transports: [
        new winston.transports.File({
            level: config.LOG_LEVEL,
            filename: './logs.log',
            handleExceptions: true,
            json: true,
            maxsize: 524288000, //500MB
            maxFiles: 5,
            colorize: false
        })
    ],
    exitOnError: false
});

module.exports = logger;
module.exports.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};
