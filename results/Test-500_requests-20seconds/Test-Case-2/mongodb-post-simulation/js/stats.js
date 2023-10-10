var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "10000",
        "ok": "7137",
        "ko": "2863"
    },
    "minResponseTime": {
        "total": "124",
        "ok": "124",
        "ko": "4022"
    },
    "maxResponseTime": {
        "total": "60016",
        "ok": "5808",
        "ko": "60016"
    },
    "meanResponseTime": {
        "total": "11115",
        "ok": "1828",
        "ko": "34266"
    },
    "standardDeviation": {
        "total": "20918",
        "ok": "1412",
        "ko": "27793"
    },
    "percentiles1": {
        "total": "2438",
        "ok": "1332",
        "ko": "60002"
    },
    "percentiles2": {
        "total": "4352",
        "ok": "2801",
        "ko": "60008"
    },
    "percentiles3": {
        "total": "60010",
        "ok": "4636",
        "ko": "60014"
    },
    "percentiles4": {
        "total": "60015",
        "ok": "5320",
        "ko": "60016"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 2841,
    "percentage": 28
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 365,
    "percentage": 4
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 3931,
    "percentage": 39
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2863,
    "percentage": 29
},
    "meanNumberOfRequestsPerSecond": {
        "total": "123.457",
        "ok": "88.111",
        "ko": "35.346"
    }
},
contents: {
"req_addpost-b5202": {
        type: "REQUEST",
        name: "AddPost",
path: "AddPost",
pathFormatted: "req_addpost-b5202",
stats: {
    "name": "AddPost",
    "numberOfRequests": {
        "total": "10000",
        "ok": "7137",
        "ko": "2863"
    },
    "minResponseTime": {
        "total": "124",
        "ok": "124",
        "ko": "4022"
    },
    "maxResponseTime": {
        "total": "60016",
        "ok": "5808",
        "ko": "60016"
    },
    "meanResponseTime": {
        "total": "11115",
        "ok": "1828",
        "ko": "34266"
    },
    "standardDeviation": {
        "total": "20918",
        "ok": "1412",
        "ko": "27793"
    },
    "percentiles1": {
        "total": "2438",
        "ok": "1332",
        "ko": "60002"
    },
    "percentiles2": {
        "total": "4352",
        "ok": "2801",
        "ko": "60008"
    },
    "percentiles3": {
        "total": "60010",
        "ok": "4636",
        "ko": "60014"
    },
    "percentiles4": {
        "total": "60015",
        "ok": "5320",
        "ko": "60016"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 2841,
    "percentage": 28
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 365,
    "percentage": 4
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 3931,
    "percentage": 39
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2863,
    "percentage": 29
},
    "meanNumberOfRequestsPerSecond": {
        "total": "123.457",
        "ok": "88.111",
        "ko": "35.346"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
