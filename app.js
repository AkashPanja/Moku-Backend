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



app.post('/',function(req,res){
   res.json(req.body);
});

app.post('/ALBUM',function(req,res){
 res.end(req.body.OFFSET);
});

//Port
app.listen(3000);
