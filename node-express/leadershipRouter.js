var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

var leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})

.get(function(req,res,next){
        res.end('Will send all the leadership info to you!');
})

.post(function(req, res, next){
    res.end('Will add the leadership: ' + req.body.name + ' with details: ' + req.body.description);
})

.delete(function(req, res, next){
        res.end('Deleting all leaderships');
});

leaderRouter.route('/:leaderID')
.all(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})

.get(function(req,res,next){
        res.end('Will send details of the leader: ' + req.params.leaderID +' to you!');
})

.put(function(req, res, next){
        res.write('Updating the leader: ' + req.params.leaderID + '\n');
    res.end('Will update the leader: ' + req.body.name +
            ' with details: ' + req.body.description);
})

.delete(function(req, res, next){
        res.end('Deleting leader: ' + req.params.leaderID);
});

app.use('/leadership',leaderRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});
