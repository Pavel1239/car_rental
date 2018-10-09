var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/rental_car');

router.get('/', function(req, res) {
  var collection = db.get('car');
  collection.find({}, function(err, car) {
    if (err) throw err;
    res.json(car);
  });
});

router.post('/', function(req, res) {
  var collection = db.get('car');
  collection.insert({
    brand: req.body.brand,
    state: req.body.state,
    availability: req.body.availability

  }, function(err, car) {
    if (err) throw err;

    res.json(car);
  });
});

module.exports = router;
