var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var cookieParser = require('cookie-parser');

//routing area
var index = require('./routes/index');
var users = require('./routes/users');
var blog = require('./routes/blog');

var login = require('./routes/login');
var api = require('./routes/api');

var app = express();
app.use(cookieParser());

const MONGODB_URI = 'mongodb://localhost:27017';

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', index);

app.use('/blog', blog);


app.use('/login', login);

app.use('/api', api);

MongoClient.connect(MONGODB_URI, function(err, database) {
  db = database;
  app.set('db', db);
  app.listen(3000);
  console.log('Listening on port 3000');
});

module.exports = app;
