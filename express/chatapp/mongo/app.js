const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

const env_configs = require(`./config/environments/${node_env()}`);

let mongoose = require('mongoose');
mongoose.connect(`mongodb://${env_configs.database.host}:${env_configs.database.port}/${env_configs.database.database}`); 	// achar melhor lugar

app.use( express.static('public') );
app.use( express.static('node_modules/bootstrap/dist') );
app.use( express.static('node_modules/jquery/dist') );

app.use( bodyParser.urlencoded({extended: true}) );
app.use( bodyParser.json() );

app.use(require('./middlewares/benchmark'));

function node_env() {
	return process.env.NODE_ENV || 'dev';
}

app.use( require('./config/log')(node_env()) );

require('express-debug')(app, {});
require('./config/template_engine')(app);
require('./config/passport')(app);

require('./config/routes')(app);


app.use( function(error, request, response, next) {
	console.log("An error occurred: " + error);
	// Exception Handler
})

app.listen(9000, () => {
	console.log(`Chat application running at http://localhost:9000 in ${node_env()}`);
});