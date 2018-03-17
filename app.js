var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello Akash Panja!");
});

app.listen(3000);