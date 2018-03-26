//Require
var express=require('express');
var mysql=require('mysql');
var bodyParser=require('body-parser');
const basicAuth=require('express-basic-auth');

//Middlewares
app.use(basicAuth({
   users:{'blaze':'Node2021'}
}));

app.use(bodyParser.json());

//Objects
var app=express();
var conn=mysql.createConnection({
   host:"localhost",
   user:"blaze",
   password:"Node2021",
   database:"moku"
});

//Methods
app.get('/',function(req,res){
   res.end("hello world");
});

app.post('/', (request, response) => {
  response.json(request.body);
});

//Port
app.listen(3000);
