var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var con = mysql.createConnection({
   host: "localhost",
   user: "blaze",
   password: "Node2021",
   database: "moku"
 });

var app = express();

app.use(bodyParser.json()); // add a middleware (so that express can parse request.body's json)

app.get('/', function(req, res){
   
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
   
});

app.listen(3000);
