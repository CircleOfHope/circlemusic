var express = require('express');
var router = express.Router();
var Songs = require('../models/songs');

router.get('/:id', function(req, res) {
  Songs.findById(req.params.id, function(err, songs) {
    res.send(songs);
  });
});

module.exports = router;
