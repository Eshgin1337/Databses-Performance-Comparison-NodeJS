var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "10000",
        "ok": "9724",
        "ko": "276"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "60001"
    },
    "maxResponseTime": {
        "total": "60017",
        "ok": "203",
        "ko": "60017"
    },
    "meanResponseTime": {
        "total": "1665",
        "ok": "9",
        "ko": "60008"
    },
    "standardDeviation": {
        "total": "9829",
        "ok": "11",
        "ko": "4"
    },
    "percentiles1": {
        "total": "8",
        "ok": "8",
        "ko": "60008"
    },
    "percentiles2": {
        "total": "10",
        "ok": "10",
        "ko": "60012"
    },
    "percentiles3": {
        "total": "16",
        "ok": "13",
        "ko": "60015"
    },
    "percentiles4": {
        "total": "60010",
        "ok": "34",
        "ko": "60016"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 9724,
    "percentage": 97
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 276,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "90.909",
        "ok": "88.4",
        "ko": "2.509"
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
        "ok": "9724",
        "ko": "276"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "60001"
    },
    "maxResponseTime": {
        "total": "60017",
        "ok": "203",
        "ko": "60017"
    },
    "meanResponseTime": {
        "total": "1665",
        "ok": "9",
        "ko": "60008"
    },
    "standardDeviation": {
        "total": "9829",
        "ok": "11",
        "ko": "4"
    },
    "percentiles1": {
        "total": "8",
        "ok": "8",
        "ko": "60008"
    },
    "percentiles2": {
        "total": "10",
        "ok": "10",
        "ko": "60012"
    },
    "percentiles3": {
        "total": "16",
        "ok": "13",
        "ko": "60015"
    },
    "percentiles4": {
        "total": "60010",
        "ok": "34",
        "ko": "60016"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 9724,
    "percentage": 97
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 276,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "90.909",
        "ok": "88.4",
        "ko": "2.509"
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
