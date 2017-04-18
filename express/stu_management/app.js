const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use( bodyParser.urlencoded({extended: true}) );
app.use( bodyParser.json() );

const config = require('./config/environment').current();

require('./config/database').init(config.database);
require('./config/router')(app);

app.listen(config.http.port, function() {
	console.log(`Hashify running on port ${config.http.port}`);
});

module.exports = app;