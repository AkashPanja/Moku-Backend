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

con.connect(function(err) {
  if (err) throw err;
  response.send"Connected!");
});

app.listen(3000);
