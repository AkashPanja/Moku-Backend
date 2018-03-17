var express = require('express');
var app =express();

//Routes Will Go Here
app.get('/', function(req, res) {
  var name = req.param('name');;  

  res.send('Hello '+name);
});

app.listen(3000);
console.log('Server Started');
