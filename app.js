var express = require("express");
var moment = require("moment");
var timeObj = { unix: "", natural: "" };
var app = express();

app.get("/:time", function(req, res){
    "use strict";
    let query = JSON.parse(req.params.time);
    console.log(typeof JSON.parse(query));
    console.log(Number.isInteger(query));
    if(query > moment()){
        timeObj.unix = null;
        timeObj.natural = null;
        res.send(timeObj);
    } else if (Number.isInteger(query)){
    timeObj.unix = query;
    timeObj.natural = moment(query).format("MMMM D, YYYY");
    res.send(timeObj);
    }
   // res.send(moment());
});

app.listen(8080, function(){
    console.log("Service running");
});