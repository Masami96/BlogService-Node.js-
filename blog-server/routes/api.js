var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

/* GET home page. */
router.get('/:username', function(req, res, next) {

  var user = req.params.username;

  var mydb = req.app.get('db');
  var blogdb = mydb.db('BlogServer');

  blogdb.collection('Posts').find({username: user}, {}).toArray(function(err, result) {
    if (err) throw err;
    res.status(200).json(result);
  });

});

router.get('/:username/:postid', function(req, res, next) {

  var user = req.params.username;
  var pid = parseInt(req.params.postid);

  var mydb = req.app.get('db');
  var blogdb = mydb.db('BlogServer');

  blogdb.collection('Posts').findOne({
      postid: pid,
      username: user
    }, function(err, doc) {
        if (err) throw err;
        res.status(200).json(doc);
  });

});

router.use(bodyParser.json());

// POST page
router.post('/:username/:postid', function(req, res, next) {
  var user = req.params.username;
  var pid = parseInt(req.params.postid);
  //check for valid title and body being passed via JSON
  console.log(req.body);
});

// PUT page
router.put('/:username/:postid', function(req, res, next) {
  var user = req.params.username;
  var pid = parseInt(req.params.postid);
  //check for valid title and body being passed via JSON
  console.log(req.body);
});

// DELETE page
router.delete('/:username/:postid', function(req, res, next) {
  var user = req.params.username;
  var pid = parseInt(req.params.postid);

  var mydb = req.app.get('db');
  var blogdb = mydb.db('BlogServer');

  blogdb.collection('Posts').deleteOne({username: user, postid: pid},
  function(err, obj) {
    if (err) res.status(400);
    res.status(204);
  });
  
});

module.exports = router;
