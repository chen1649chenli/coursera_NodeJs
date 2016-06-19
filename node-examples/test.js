var add = function(a,b,callback){
  var c = a + b;
  callback(c);
}

add(8,9,function(sum){
  console.log(sum);
})
