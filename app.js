var express=require('express');
var mysql=require('require');

var app=express();
var conn=mysql.createConnection({
   host:"localhost",
   user:"blaze",
   password:"Node2021",
   database:"moku"
});

app.get('/',function(req,res){
   conn.connect(function(err){
   if(err) throw err;
      res.send("Connected");
   });
});

app.listen(3000);
