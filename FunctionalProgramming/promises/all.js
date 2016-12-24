var database = JSON.parse(require('fs').readFileSync('./users.json', 'utf8'));
function findByName(name) {
	return database.filter((user) => user.name == name);
}

function delay() {
	return Math.random()*1000;
}

var findRichard = new Promise((resolve) => {
	setTimeout(function() { resolve(findByName('Richard')); }, delay());
});
var findNadilson = new Promise((resolve) => {
	setTimeout(function() { resolve(findByName('Nadilson')); }, delay());
});
var findSandrow = new Promise((resolve) => {
	setTimeout(function() { resolve(findByName('Sandrow')); }, delay());
});

Promise.all([findRichard, findNadilson, findSandrow])
	.then(console.log);
