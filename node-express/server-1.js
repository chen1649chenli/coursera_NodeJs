/*
var express = require('express');
var http = require('http');

var port = 3000;
var hostname = 'localhost';

var app = express();
app.use(function(req,res,next){
  res.writeHead(200,{'Content-Type':'text/html'});
  res.end('<html><body><h1>Hello World</h1></body></html>');
});

var server = http.createServer(app);
server.listen(port,hostname, function(){
  console.log(`The server is running on http://${hostname}:${port}`);
})
*/

var express = require('express');
var app = express();

app.use('/hom', function(req,res,next){
  console.log('%s %s', req.method, req.url);
  next()
})

app.get('/',function(req,res){
  res.send("this is the home page!");
})

app.get('/home.html',function(req,res){
  res.send("there is nothing here");
})

app.listen(3000);
