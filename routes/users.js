var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/rental_car');

router.get('/', function(req, res) {
  var collection = db.get('client');
  collection.find({}, function(err, client) {
    if (err) throw err;
    res.json(client);
  });
});


router.get('/:id', function (req, res) {
  var collection = db.get('client');
  collection.findOne({
    _id: req.params.id
  }, function (err, client) {
    if (err) throw err;
    res.json(client);
  });
});

router.put('/:id', function (req, res) {
  var collection = db.get('client');
  collection.update({
    _id: req.params.id
  }, {
    FIO: req.body.FIO,
    passport: req.body.passport,
    tel: req.body.tel
  }, function (err, client) {
    if (err) throw err;

    res.json(client);
  });
});


router.post('/', function(req, res) {
  var collection = db.get('client');
  collection.insert({
    FIO: req.body.FIO,
    passport: req.body.passport,
    tel: req.body.tel

  }, function(err, client) {
    if (err) throw err;

    res.json(client);
  });
});

router.delete('/:id', function (req, res) {
  var collection = db.get('client');
  collection.remove({
    _id: req.params.id
  }, function (err, client) {
    if (err) throw err;

    res.json(client);
  });
});

module.exports = router;
