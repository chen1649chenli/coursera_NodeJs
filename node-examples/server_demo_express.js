var log4js = require('log4js');
var express= require('express');



var logger = log4js.getLogger('server-express');


var app = express();
app.get("/",function(req,res){

  res.send("Hello world! I am express framework.");
});


/*
var server = http.createServer(function(req,res){
  logger.info(req.headers);
  res.setHeader("AppID","123456");
  if (req.url == "/"){
    res.write("welcome to nodejs! Li is great!");
    res.end();
  }else
  if (req.url == "/customer"){
    res.write("welcome our new customer!");
    res.end();
  }else {
    res.write("Page not found");
    res.end();
  }

});
*/
app.listen(8040);
console.log("server is running on port 8040!");
