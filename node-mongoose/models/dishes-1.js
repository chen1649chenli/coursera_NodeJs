var mongoose = require('mongoose');
var dishSchema = mongoose.Schema({
  name:{
    type: String,
    require: true,
    unique: true
  },
  description:{
    type: String,
    require: true,
  }
},
{
  timestamps:true
});

var Dishes = mongoose.model('dishes',dishSchema);
module.exports = Dishes;
