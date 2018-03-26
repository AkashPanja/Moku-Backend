//Require
var express=require('express');
var bodyParser=require('body-parser');
var mysql=require('mysql');
const basicAuth=require('express-basic-auth');

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

app.use(basicAuth({
        users:{"blaze":"Node2021"}
}));

//Methods
app.get('/',function(req,res){
   res.send("Hello World");
});

//Port
app.listen(3000);
