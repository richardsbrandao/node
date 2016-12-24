var http = require('http')
var fs = require('fs')

var server = http.createServer(function(request, response) {
	console.log(`Rechiesta in arrivo: ${request.url}`)

	if(request.url.startsWith('/static/')) {
		fs.readFile(request.url.substr(1), (error, data) => {
			if(error) {
				console.log('Pagina non ha trovata: ' + error)
				response.status = 404
				response.end('404 :(');
			} else {
				response.end(data);
			}
		});	
		return;
	}

	response.end('Hello World!')
	return;
});

server.listen(9000, 'localhost');