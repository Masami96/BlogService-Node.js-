var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

/* GET home page. */
router.get('/:username', function(req, res, next) {

  var user = req.params.username;

  var mydb = req.app.get('db');
  var blogdb = mydb.db('BlogServer');

  blogdb.collection('Posts').find({username: user}, {}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });

});

module.exports = router;
