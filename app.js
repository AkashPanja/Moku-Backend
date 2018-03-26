var express=require('express');
var mysql=require('mysql');

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
      var sql="CREATE TABLE ALBUM ( `ALBUM_ID` VARCHAR(30) NOT NULL , `ALBUM_NAME` VARCHAR(30) NOT NULL , `ALBUM_ARTIST` VARCHAR(30) NOT NULL , `ALBUM_ART` VARCHAR(30) NOT NULL )";
      conn.query(sql,function(err,result){
         if(err) throw err;
         res.send("Table Created");
      });
   });
});

app.listen(3000);
