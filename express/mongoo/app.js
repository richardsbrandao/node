var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/chat');

app.use( bodyParser.urlencoded({extended: true}) );
app.use( bodyParser.json() );

require('./config/router')(app);

app.listen(9000, function() {
	console.log(`Chat application running at http://localhost:9000`);
});