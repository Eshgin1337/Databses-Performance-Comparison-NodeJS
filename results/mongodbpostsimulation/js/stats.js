var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "10000",
        "ok": "9091",
        "ko": "909"
    },
    "minResponseTime": {
        "total": "193",
        "ok": "193",
        "ko": "4024"
    },
    "maxResponseTime": {
        "total": "60017",
        "ok": "5512",
        "ko": "60017"
    },
    "meanResponseTime": {
        "total": "3806",
        "ok": "2322",
        "ko": "18639"
    },
    "standardDeviation": {
        "total": "8820",
        "ok": "1013",
        "ko": "24567"
    },
    "percentiles1": {
        "total": "2554",
        "ok": "2410",
        "ko": "4054"
    },
    "percentiles2": {
        "total": "3159",
        "ok": "2863",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "4512",
        "ok": "4140",
        "ko": "60013"
    },
    "percentiles4": {
        "total": "60009",
        "ok": "4744",
        "ko": "60015"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 695,
    "percentage": 7
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 914,
    "percentage": 9
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 7482,
    "percentage": 75
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 909,
    "percentage": 9
},
    "meanNumberOfRequestsPerSecond": {
        "total": "125",
        "ok": "113.638",
        "ko": "11.363"
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
        "ok": "9091",
        "ko": "909"
    },
    "minResponseTime": {
        "total": "193",
        "ok": "193",
        "ko": "4024"
    },
    "maxResponseTime": {
        "total": "60017",
        "ok": "5512",
        "ko": "60017"
    },
    "meanResponseTime": {
        "total": "3806",
        "ok": "2322",
        "ko": "18639"
    },
    "standardDeviation": {
        "total": "8820",
        "ok": "1013",
        "ko": "24567"
    },
    "percentiles1": {
        "total": "2553",
        "ok": "2411",
        "ko": "4054"
    },
    "percentiles2": {
        "total": "3158",
        "ok": "2863",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "4512",
        "ok": "4140",
        "ko": "60013"
    },
    "percentiles4": {
        "total": "60009",
        "ok": "4744",
        "ko": "60015"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 695,
    "percentage": 7
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 914,
    "percentage": 9
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 7482,
    "percentage": 75
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 909,
    "percentage": 9
},
    "meanNumberOfRequestsPerSecond": {
        "total": "125",
        "ok": "113.638",
        "ko": "11.363"
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