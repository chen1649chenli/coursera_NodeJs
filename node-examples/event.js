var events = require('events');
var eventEmitter = new events.EventEmitter();
var showID = function(id){
  console.log("the user id is: " + id);
}
eventEmitter.on("mission",showID);


eventEmitter.emit("mission",8);
eventEmitter.removeListener("mission",showID);
eventEmitter.emit("mission",18);
