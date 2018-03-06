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

  var mydb = req.app.get('db');
  var blogdb = mydb.db('BlogServer');
  
  blogdb.collection('Posts').findOne({
      postid: pid,
      username: user
    }, function(err, doc) {
        if (err) throw err;
        if(doc) {
          res.render('pages/blog', {
            username: user,
            postid: pid,
            title: doc.title,
            body: doc.body,
            created: doc.created,
            modified: doc.modified
           });
        }
  });

});

module.exports = router;
