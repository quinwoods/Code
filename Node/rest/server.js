var express = require('express');
var app = express();
var fs = require("fs");

app.get('/agelimitforpuppies', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
	  console.log( data );
	  console.log("I have been summoned")
	  res.end( data );
   });
})

app.get('/puppies', function (req, res) {
	   fs.readFile( __dirname + "/" + "puppyvistors.json", 'utf8', function (err, data) {
		  console.log( data );
		  console.log("I have been summoned")
		  res.end( data );
	   });
	})
	

var puppy = {
	"puppy" : 
	{
		"name" : "octavia"
	},
}




var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})