var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser');


router.get('/', function(req, res, next) {
	var username = req.query.username;
	var password = req.query.password;
	var redirect = req.query.redirect;

	var mydb = req.app.get('db');
  var blogdb = mydb.db('BlogServer');

  if(redirect == null){
  	res.sendStatus(400);
  	console.log("didnt put redirect");
  } 
  else if(username == null || password == null) {
  	console.log("no username or password");
  	res.render('pages/login', { redirect: redirect });
  } 
  else {
  	console.log("hi");

		blogdb.collection('Users').findOne({
	      username: username
	  	}, function(err, doc) {
	  		if(doc){
		  		bcrypt.compare(password, doc.password, function(err, result) {
		    		if(result){
		    			jwt.sign({ "usr": username }, 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c', { expiresIn: 60*60*2, algorithm: 'HS256' }, function(err, token) {
  							res.cookie('jwt', token);
  							res.redirect(redirect);
							});
		    		} else {
		    			res.render('pages/login', { redirect: redirect });
		    			console.log("password does not match database password");
		    		}
					});
	  		} else {
	  			res.render('pages/login', { redirect: redirect });
	  			console.log("username not found in db");
	  		}
	  	});
		

	}
});


module.exports = router;
