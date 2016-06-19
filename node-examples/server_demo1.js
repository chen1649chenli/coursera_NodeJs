var log4js = require('log4js');
var http = require('http');

log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('app.log'),'server-demo1');

var logger = log4js.getLogger('server-demo1');

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

server.listen(8040);
console.log("server is running on port 8040!");
