var express = require("express");
var router = express.Router();
var app = express();

module.exports = router;

router.post("/",function(req,res){
  res.send(req.body.name.toString());
});

router.get("/",function(req,res){
  res.send("Get Request Received");
});
