var express = require("express");

var app = express();

app.set("views", "views");
app.set("view engine", "pug");

app.get("/about", function(req, res, next){
	res.render("about", { "body":"This is about", "title":"I 'm good"});
} );

app.get("/", function(req, res, next){
	res.end("Nothing here");
} );

app.use( express.static("public") );

app.listen(3031, function(){
	console.log("Server running on localhost:3031");
} );
