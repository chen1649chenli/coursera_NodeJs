var http = require("http");

var server = http.createServer(function(request,response){
  request.on('error',function(err){
    console.log(err);
    response.statusCode = 400;
    response.end();
  });
  response.on('error', function(err){
    console.log(err);
  });
  if (request.method = "POST"){
    //echo the data from request back
    request.pipe(response);
  } else {
    response.statusCode = 404;
    response.end();
  };

})

server.listen(3000,'localhost',function(){
  console.log('Server running at localhost:6000/');
});
