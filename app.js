var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//var monSess = require('mongoose-session');
var path = require('path');

//var Item = require('./app/models/item.js');

// app config
app.use(bodyParser());
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, './app/views'));
app.use(express.static(__dirname + '/app/public'));

var Bat = require('./app/models/bat.js');


// route section
var router = express.Router();
require( './app/routes' )(router, Bat);
// Register router, to prefix all routes w/ '/api' use: app.use('/api', router);
app.use(router);

mongoose.connect('mongodb://localhost/test');
var port = process.env.PORT || 8009;
app.listen(port);
console.log('now serving on port ' + port);