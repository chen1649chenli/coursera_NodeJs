var mongoose = require('mongoose'),
    assert = require('assert');

var Leadership = require('./models/leadership');

// Connection URL
var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");

    // create a new dish
    Leadership.create({
        name: 'Li Chen',
        description: 'Our CEO, Li Chen...',
        designation: 'Chielf Epicurous Officer',
        image: 'images/lichen.png',
        abbr: 'CEO',
    }, function (err, leadership) {
        if (err) throw err;
        console.log('leadership created!');
        console.log(leadership);

        var id = leadership._id;

        // get all the dishes
        setTimeout(function () {
            Leadership.findByIdAndUpdate(id, {
                    $set: {
                        description: 'Updated Test by Li'
                    }
                }, {
                    new: true
                })
                .exec(function (err, leadership) {
                    if (err) throw err;
                    console.log('Updated Leadership!');
                    console.log(leadership);

                    db.collection('leaderships').drop(function () {
                        db.close();

                    });
                });
        },3000);
    });
});
