var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var cookieParser = require('cookie-parser');

var jwt = require('jsonwebtoken');

//routing area
var blog = require('./routes/blog');

var login = require('./routes/login');
var api = require('./routes/api');

var app = express();
app.use(cookieParser());

var tokenMiddleware = function(req, res, next) {

    var user = req.params.username;
    var token = req.cookies.jwt;
    jwt.verify(token, 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c', function(err, decoded) {

      var seconds = new Date() / 1000;
      if( decoded == undefined || decoded.usr != user || decoded.exp < seconds){
        res.status(401).send("Unauthorized");
      }
      else {
      	app.set('user', user)
      	next();
      }
    });
}

const MONGODB_URI = 'mongodb://localhost:27017';

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/blog', blog);

app.use('/login', login);

app.use('/api/:username', tokenMiddleware, api);

MongoClient.connect(MONGODB_URI, function(err, database) {
  db = database;
  app.set('db', db);
  app.listen(3000);
  console.log('Listening on port 3000');
});

module.exports = app;
