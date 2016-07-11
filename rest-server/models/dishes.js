var mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var commentSchema = mongoose.Schema({
    rating:  {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment:  {
        type: String,
        required: true
    },
    author:  {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var dishSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Currency,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    label: {
        type: String,
        default:"",
        required: false
    },
    description: {
        type: String,
        required: true
    },
    comments:[commentSchema]
}, {
    timestamps: true
});


var Dishes = mongoose.model('dishes',dishSchema);
module.exports = Dishes;
