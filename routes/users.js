var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/rental_car');

router.get('/', function(req, res) {
var collection = db.get('client'); collection.find({}, function(err, client){
if (err) throw err; res.json(client);
});
});

module.exports = router;
