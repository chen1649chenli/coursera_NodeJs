var express = require('express');
var morgan = require('morgan');
var path = require('path');

var port = 3000;
var hostname = 'localhost';

var app = express();
app.use(morgan('dev'));

app.get("/",function(req,res){
  res.sendFile(path.join(__dirname+"/public/index.html"));
});

app.get("/aboutus.html",function(req,res){
  res.sendFile(path.join(__dirname+"/public/aboutus.html"));
});



app.listen(port,hostname, function(){
  console.log(`The server is running on http://${hostname}:${port}`);
})
