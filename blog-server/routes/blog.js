var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;


/* GET home page. */
router.get('/:username', function(req, res, next) {
  res.render('pages/blog', { username: req.params.username });
});

router.get('/:username/:postid', function(req, res, next) {

  var user = req.params.username;
  var pid = parseInt(req.params.postid);
  var title;
  var body;
  var created;
  var modified;

  //connect to the MongoDB database

  MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) { console.dir(err); }

    var db = client.db('BlogServer');

    var posts = db.collection('Posts').findOne({
      postid: pid,
      username: user
    },function(findErr, result) {
      if (findErr) throw findErr;
      console.log(result);
      title = result.title;
      body = result.body;
      created = result.created;
      modified = result.modified;
      client.close();
    });
  });

  res.render('pages/blog', {
    username: user,
    postid: pid,
    title: title,
    body: body,
    created: created,
    modified: modified
   });

});

module.exports = router;
