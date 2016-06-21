
var express= require('express');


var app = express();
app.post("/",function(req,res){

  //res.send("Hello world! I am express framework.");
  req.pipe(res);
});


app.listen(8040);
console.log("server is running on port 8040!");
