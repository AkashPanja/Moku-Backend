var express = require('express');
var bodyParser = require('body-parser');
var app = express();

const basicAuth = require('express-basic-auth');
 
app.use(basicAuth({
    users: { 'blaze': 'Node2021' }
}));

app.use(bodyParser.json()); // add a middleware (so that express can parse request.body's json)

app.get('/', function(req, res){
 res.send("Hello World!");
});

app.post('/', (request, response) => {
  response.json(request.body);
 var mysql = require('mysql');

 var con = mysql.createConnection({
   host: "localhost",
   user: "blaze",
   password: "Node2021"
 });

 con.connect(function(err) {
   if (err) throw err;
   console.log("Connected!");
 });
});

app.listen(3000);
