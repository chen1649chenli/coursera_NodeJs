var mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var promotionSchema = mongoose.Schema({
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
    label: {
        type: String,
        default:"",
        required: false
    },
    description: {
        type: String,
        required: true
    }},
{
    timestamps: true
});


var Promotions = mongoose.model('promotions',promotionSchema);
module.exports = Promotions;
