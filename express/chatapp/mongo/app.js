const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

const applib = {
	server: null,
	start: function(callback) {
		applib.server = app.listen(9000, callback);
	},
	close: function(callback) {
		applib.server.close(callback);
	},
	node_env: function() {
		return process.env.NODE_ENV || 'dev';
	}
};

const env_configs = require(`./config/environments/${applib.node_env()}`);

let mongoose = require('mongoose');
mongoose.connect(`mongodb://${env_configs.database.host}:${env_configs.database.port}/${env_configs.database.database}`); 	// achar melhor lugar

app.use( express.static('public') );
app.use( express.static('node_modules/bootstrap/dist') );
app.use( express.static('node_modules/jquery/dist') );

app.use( bodyParser.urlencoded({extended: true}) );
app.use( bodyParser.json() );

app.use(require('./middlewares/benchmark'));

app.use( require('./config/log')(applib.node_env()) );

require('express-debug')(app, {});
require('./config/template_engine')(app);
require('./config/passport')(app);

require('./config/routes')(app);

app.use( function(error, request, response, next) {
	console.log("An error occurred: " + error);
	// Exception Handler
})


applib.start(() => {
	console.log(`Chat application running at http://localhost:9000 in ${applib.node_env()}`);
});

module.exports = applib;