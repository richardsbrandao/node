var fs = require('fs');

module.exports = function(env) {
	var log_file = `${__dirname}/../logs/access-${env}.log`;
	var accessLogStream = fs.createWriteStream(log_file, {flags:'a'});
	
	return require('morgan')('combined', {stream: accessLogStream})
}