var moment = require('moment');

module.exports = function(request, response, next) {
	var start = moment().valueOf()
	next();
	var end = moment().valueOf();
	console.log(`${request.method} ${request.baseUrl}${request.url}: ${end-start} mls`);
};