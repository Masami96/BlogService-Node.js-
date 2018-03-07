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
        if (err) res.status(404).send("Not found");
        res.status(200).json(doc);
  });

});

router.use(bodyParser.json());

// POST page
router.post('/:username/:postid', function(req, res, next) {
  var user = req.params.username;
  var pid = parseInt(req.params.postid);
  //check for valid title and body being passed via JSON
  if (req.body.title == null || req.body.body == null)
    res.status(400).send("Bad request");
  var d = new Date();
  var now = d.getTime();
  var title = req.body.title;
  var body = req.body.body;

  var mydb = req.app.get('db');
  var blogdb = mydb.db('BlogServer');

  var ins_request = {
    postid: pid,
    username: user,
    created: now,
    modified: now,
    title: title,
    body: body
  };

  blogdb.collection('Posts').insertOne(ins_request, function(err, ret) {
    if (err) res.status(400).send("Bad request");
    res.status(201).send("Created");
  });

});

// PUT page
router.put('/:username/:postid', function(req, res, next) {
  var user = req.params.username;
  var pid = parseInt(req.params.postid);
  //check for valid title and body being passed via JSON
  if (req.body.title == null || req.body.body == null)
    res.status(400).send("Bad request");
  var title = req.body.title;
  var body = req.body.body;
  var d = new Date();
  var now = d.getTime();

  var mydb = req.app.get('db');
  var blogdb = mydb.db('BlogServer');

  var query_loc = { postid: pid, username: user };
  var upd_request = { title: title, body: body, modified: now };

  blogdb.collection('Posts').updateOne(query_loc, upd_request, function(err, res) {
    if (err) res.status(400).send("Bad request");
    res.status(200).send("OK");
  })
});

// DELETE page
router.delete('/:username/:postid', function(req, res, next) {
  var user = req.params.username;
  var pid = parseInt(req.params.postid);

  var mydb = req.app.get('db');
  var blogdb = mydb.db('BlogServer');

  blogdb.collection('Posts').deleteOne({username: user, postid: pid},
  function(err, obj) {
    if (err) res.status(400).send("Bad request");
    res.status(204).send("No content");;
  });

});

module.exports = router;
