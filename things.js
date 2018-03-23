var express = require("express");
var router = express.Router();
var app = express();

router.get("/",function(req,res){
  res.send("Get Request Received");
});

router.post("/",function(req,res){
  res.send(req.body.name.toString());
});

module.exports = router;
