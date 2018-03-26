//Require
var express=require('express');
var bodyParser=require('body-parser');
var mysql=require('mysql');

//Objects
var app=express();
var conn=mysql.createConnection({
   host:"localhost",
   user:"blaze",
   password:"Node2021",
   database:"moku"
});

//Middleware
app.use(bodyParser.json());

//Methods
app.get('/',function(req,res){
   res.send("Hello World");
});

//Port
app.listen(3000);
