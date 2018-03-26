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

con.connect(function(err) {
  if (err) throw err;
  response.send("Connected!");
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    response.send("Table created");
  });
});
 
});

app.listen(3000);
