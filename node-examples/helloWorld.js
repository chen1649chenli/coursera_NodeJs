function perform(a,b,callback){
  var errorCode = 400;
  callback(errorCode, "There is data error");
}

perform (1,2,function(x,y){
  if(x){
    console.log(y)
  }
})
