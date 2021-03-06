var express = require("express");
var moment = require("moment");
var timeObj = { unix: null, natural: null };
var port = process.env.PORT || 8080;
var app = express();

app.get("/", function(req, res){
  res.send("Please include an Unix time or a proper Date at the end of the URL. For example: /March 30 2017");
});

app.get("/:time", function(req, res){
  "use strict";
  let query = req.params.time;

  if(Number.isInteger(Number(query))){
    if(Number(query) > parseInt(moment().format("X"), 10)){
      res.send(timeObj);
    } else {
      query = Number(query);
      timeObj.unix = query;
      timeObj.natural = moment.unix(query).format("MMMM D, YYYY");
      res.send(timeObj);
    }
  } else if(!moment(query).isValid()){
    res.send(timeObj);
  } else {
    timeObj.natural = moment(query).format("MMMM D, YYYY");
    timeObj.unix = parseInt(moment(query).format("X"), 10);
    res.send(timeObj);
  }
});

app.listen(port, function(){
  console.log("Service running");
});
