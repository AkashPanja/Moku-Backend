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

app.get('/',function(req,res){
  res.end("Hello World");
});


app.listen(3000);
