var a = 10
var b = 3
try {
  var c = a/b;
  if (c==Infinity){
    throw new Error("this error is caused by invalid operation")
  }else{
    console.log(c);
  }
} catch(err){
  console.log(err)
}
