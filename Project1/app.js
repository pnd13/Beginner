var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index");
});

// GET everything after "/favplace/:..."
app.get("/favplace/:place", function(req, res){
  var place = req.params.place;
   res.render("place", {place: place});
});
// -------

app.get("/countries", function(req, res){
    var countries = [
        {country: "Greece", capital: "Athens"},
        {country: "Italy", capital: "Rome"},
        {country: "Spain", capital: "Madrid"}
    ];
    
    res.render("countries", {countries: countries});
});

app.listen(3000);
