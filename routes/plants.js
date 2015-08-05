require('dotenv').load()
var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.MONGOLAB_URI)
var Plants = db.get('plants')

router.get('/', function(req, res) {
  Plants.find({}, function(err, plants) {
    if (err) {
      res.send(err);
    }
    res.status(200).json(plants);
  })
});

router.post('/', function(req, res) {
  Plants.insert(req.body, function(err, plant) {
    if (err) {
      res.send(err);
    }
    res.status(201).json(plant);
  });
})

module.exports = router
