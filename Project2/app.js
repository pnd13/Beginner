var express          = require("express"),
    bodyParser       = require("body-parser");

var app=express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var friends = ["Bill", "Nick", "Peter"];

// GET ROUTES
app.get("/", function(req, res){
   res.render("index"); 
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
});
//

// POST ROUTE
app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});
//


app.listen(3000);