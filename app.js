var express = require("express");
var moment = require("moment");
var timeObj = { unix: "", natural: "" };
var app = express();

app.get("/:time", function(req, res){
    "use strict";
    let query = req.params.time;
    console.log(query);
    console.log(Number.isInteger(query));
    if(query > moment()){
        timeObj.unix = null;
        timeObj.natural = null;
        res.send(timeObj);
    } else if (Number.isInteger(parseInt(query, 10))){
    timeObj.unix = query;
    timeObj.natural = moment(parseInt(query, 10)).format("MMMM D, YYYY");
    res.send(timeObj);
    } else {
        res.send("String");
    }
   // res.send(moment());
});

app.listen(8080, function(){
    console.log("Service running");
});