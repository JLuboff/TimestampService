var express = require("express");
var moment = require("moment");
var timeObj = { unix: "", natural: "" };
var app = express();

app.get("/", function(req, res){
    res.send("Please include an Unix time or a proper Date");
})

app.get("/:time", function(req, res){
    "use strict";
    let query = req.params.time;

    if(query > moment() || !moment(query).isValid()){
        timeObj.unix = null;
        timeObj.natural = null;
        res.send(timeObj);
    } else if (Number.isInteger(parseInt(query, 10))){
    timeObj.unix = query;
    timeObj.natural = moment(parseInt(query, 10)).format("MMMM D, YYYY");
    res.send(timeObj);
    } else {
        timeObj.natural = moment(query).format("MMMM D, YYYY");
        timeObj.unix = parseInt(moment(query).format("X"), 10);
        res.send(timeObj);
    }
});

app.listen(8080, function(){
    console.log("Service running");
});