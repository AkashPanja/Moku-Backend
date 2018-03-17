var express = require('express');
var app =express();

//Routes Will Go Here
app.get('/', function(req, res){
res.send("Post Test 1");
});

app.listen(3000);
console.log('Server Started');