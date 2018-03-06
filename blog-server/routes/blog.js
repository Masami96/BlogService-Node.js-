var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var commonmark = require('commonmark');




/* GET home page. */
router.get('/:username', function(req, res, next) {
  var reader = new commonmark.Parser();
  var writer = new commonmark.HtmlRenderer();

  var user = req.params.username;

  var mydb = req.app.get('db');
  var blogdb = mydb.db('BlogServer');

  blogdb.collection('Posts').find({username: user}, {}).toArray(function(err, result) {
    if (err) throw err;
    var titleArray = [];
    var bodyArray = [];
    for (var i = 0; i < result.length; i++){
      var parsed = reader.parse(result[i].title);
      var resultTitle = writer.render(parsed);
      var parsed = reader.parse(result[i].body);
      var resultBody = writer.render(parsed);
      titleArray.push(resultTitle);
      bodyArray.push(resultBody);
    }
    console.log(titleArray);
    console.log(bodyArray);

    res.render('pages/blog1', {
      username: user,
      titles: titleArray,
      bodies: bodyArray
     });

  });

  //res.render('pages/blog1', { username: req.params.username });
});

router.get('/:username/:postid', function(req, res, next) {

  var reader = new commonmark.Parser();
  var writer = new commonmark.HtmlRenderer();

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
          var parsed = reader.parse(doc.title);
          var resultTitle = writer.render(parsed);
          var parsed = reader.parse(doc.body);
          var resultBody = writer.render(parsed);
          res.render('pages/blog', {
            username: user,
            postid: pid,
            title: resultTitle,
            body: resultBody,
            created: doc.created,
            modified: doc.modified
           });
        }
  });

});

module.exports = router;
