
var config = {

    "DEV" : {
        "ENABLED" : true,
        "PORT" : 3000,
        "LOG_LEVEL":'debug',
        "CLUSTERED" : false,
        "JOB_INTERVAL_IN_MILLISECONDS" : 1 * 2 * 1000,
        "DROPOUT_TIMELIMIT_IN_MILLISECONDS" : 1 * 5 * 1000,
        "dropoffEndpoint" : {
            "dom2" : 'http://127.0.0.1:8084/dropoffViewer/handle-dropoff.htm?tenant=dom2',
            "int2" : 'http://127.0.0.1:8084/dropoffViewer/handle-dropoff.htm?tenant=int2'
        },
        "convertEndpoint" : {
            "dom2" : 'http://127.0.0.1:8084/dropoffViewer/handle-convert.htm?tenant=dom2',
            "int2" : 'http://127.0.0.1:8084/dropoffViewer/handle-convert.htm?tenant=int2'
        }
    },
    "QA" : {
        "ENABLED" : true,
        "PORT" : 3000,
        "LOG_LEVEL":'debug',
        "CLUSTERED" : true,
        "JOB_INTERVAL_IN_MILLISECONDS" : 1 * 2 * 1000,
        "DROPOUT_TIMELIMIT_IN_MILLISECONDS" : 1 * 5 * 1000,
        "dropoffEndpoint" : {
            "dom2" : 'http://127.0.0.1:8080/collector/handle-dropoff.htm?tenant=dom2',
	        "int2" : 'http://127.0.0.1:8080/collector/handle-dropoff.htm?tenant=int2'
        },
        "convertEndpoint" : {
            "dom2" : 'http://127.0.0.1:8080/collector/handle-convert.htm?tenant=dom2',
            "int2" : 'http://127.0.0.1:8080/collector/handle-convert.htm?tenant=int2'
        }
    },
    "RFS" : {
        "ENABLED" : true,
        "PORT" : 3000,
        "LOG_LEVEL":'debug',
        "CLUSTERED" : true,
        "JOB_INTERVAL_IN_MILLISECONDS" : 1 * 2 * 1000,
        "DROPOUT_TIMELIMIT_IN_MILLISECONDS" : 1 * 5 * 1000,
        "dropoffEndpoint" : {
            "dom2" : 'http://172.16.1.233:7070/collector/handle-dropoff.htm?tenant=dom2',
   	      "int2" : 'http://172.16.1.233:7070/collector/handle-dropoff.htm?tenant=int2'
        },
        "convertEndpoint" : {
            "dom2" : 'http://172.16.1.233:7070/collector/handle-convert.htm?tenant=dom2',
            "int2" : 'http://172.16.1.233:7070/collector/handle-convert.htm?tenant=int2'
        }
    },
    "PROD" : {
        "ENABLED" : true,
        "PORT" : 3000,
        "LOG_LEVEL":'error',
        "CLUSTERED" : false,
        "JOB_INTERVAL_IN_MILLISECONDS" : 10 * 60 * 1000,
        "DROPOUT_TIMELIMIT_IN_MILLISECONDS" : 1 * 60 * 60 * 1000,
        "dropoffEndpoint" : {
            "dom2" : 'http://172.16.1.154:7070/collector/handle-dropoff.htm?tenant=dom2',
            "int2" : 'http://172.16.1.154:7070/collector/handle-dropoff.htm?tenant=int2'
        },
        "convertEndpoint" : {
            "dom2" : 'http://172.16.1.154:7070/collector/handle-convert.htm?tenant=dom2',
            "int2" : 'http://172.16.1.154:7070/collector/handle-convert.htm?tenant=int2'
        }
    }
}

module.exports = config[process.env.environment];
