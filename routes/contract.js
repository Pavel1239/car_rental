var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/rental_car');

router.get('/', function (req, res) {
  var collection = db.get('contract');
  collection.find({}, function (err, contract) {
    if (err) throw err;
    res.json(contract);
  });
});


router.get('/:id', function (req, res) {
  var collection = db.get('contract');
  collection.findOne({
    _id: req.params.id
  }, function (err, contract) {
    if (err) throw err;
    res.json(contract);
  });
});

router.put('/:id', function (req, res) {
  var collection = db.get('contract');
  collection.update({
    _id: req.params.id
  }, {
    id_client: req.body.id_client,
    id_car: req.body.id_car,
    date_begin: req.body.date_begin,
    date_end: req.body.date_end,
    price: req.body.price
  }, function (err, contract) {
    if (err) throw err;

    res.json(contract);
  });
});


router.post('/', function (req, res) {
  var collection = db.get('contract');
  collection.insert({
    id_client: req.body.id_client,
    id_car: req.body.id_car,
    date_begin: req.body.date_begin,
    date_end: req.body.date_end,
    price: req.body.price

  }, function (err, contract) {
    if (err) throw err;

    res.json(contract);
  });
});

router.delete('/:id', function (req, res) {
  var collection = db.get('contract');
  collection.remove({
    _id: req.params.id
  }, function (err, contract) {
    if (err) throw err;

    res.json(contract);
  });
});


module.exports = router;