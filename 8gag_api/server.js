'use strict'

var express = require("express"),
	mongoose = require("mongoose"),
	bodyParser = require("body-parser"),
	http = require("http"),
	exphbs = require("express-handlebars"),
	passport = require("passport"),
	LocalStrategy = require("passport-local").Strategy,
	session = require("express-session"),
	path = require("path"),
	cors = require("cors");

var app = express();

mongoose.connect("mongodb://localhost/8gag");
// @TODO: apply method to exit process if mongodb disconnects

app.set('port', 3030);

app.set('views', __dirname + '/views');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//app.use(express.favicon(path.join(__dirname, 'public/img/favicon.ico')));
//app.use(express.logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("*", function(req, res, next) {
	console.log("Request for " + req.method + " - " + req.path);
	next();
});

//app.use('/',require("./routes/index"))

app.use('/api',require("./routes/api"));

http.createServer(app).listen(app.get('port'), function() {
	console.log("Express listening on port ", app.get('port'));
});