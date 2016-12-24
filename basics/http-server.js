var http = require('http')

var server = http.createServer(function(request, response) {
	response.end("Hello World!");
});

server.listen(9000)

console.log("Server running at http://127.0.0.1:9000");