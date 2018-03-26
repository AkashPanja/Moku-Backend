//Require
var express=require('express');

//Objects
var app=express();

//Methods
app.get('/',function(req,res){
   res.send("Hello World");
});

//Port
app.listen(3000);
