let fs = require('fs');

function readFile(filename) {
	return new Promise((resolve, reject) => {
		return fs.readFile(filename, 'utf8', (error, content) => {
			if(error) {
				reject(error);
			} else {
				resolve(content);
			}
		});
	});
}

function parse(content) {
	return JSON.parse(content);
}

function errorHandler(error) {
	console.error('Deu erro brabo! ' + error);
}

function selectYouger(users) {
	return users.reduce((younger, user) => {
		if( younger && younger.age < user.age  ) {
			return younger;
		}

		younger = user;
		return younger;
	});
}

function greeting(user) {
	console.log(`Hello ${user.name} you are the youngest (${user.age})`);
}

readFile('users.json')
	.then(parse)
	.catch(errorHandler)
	.then(selectYouger)
	.then(greeting);

readFile('naoexiste.json')
	.then(parse)
	.then(selectYouger)
	.then(greeting)
	.catch(errorHandler);

readFile('../employees.js')
	.then(parse)
	.then(selectYouger)
	.then(greeting)
	.catch(errorHandler);