const fs = require('fs');
const csvLanguagesStream = fs.createReadStream('./data/languages.csv', {encoding: 'utf8', highWaterMark: 3});

class Body {
	constructor(value) {
		this.value = value;
	}
	ap(fn, body) {
		return fn(this, body);
	}
	getNewstLanguages() {
		return this.value.split(/\r?\n/)
					.map((languageWithCreation) => languageWithCreation.split(','))
					.filter((languageWithCreationSplitted) => languageWithCreationSplitted[1] > 1991)
					.map((newstLanguages) => newstLanguages[0])
	}
}

let body = new Body('');
let result = [];

function concat(bodyOne, bodyTwo) {
	return new Body(bodyOne.value + bodyTwo.value);
}

csvLanguagesStream.on('data', (line) => {
	body = body.ap(concat, new Body(line));
	if ( body.value.endsWith('\n') ) {
		result.push( body.getNewstLanguages() );
		body = new Body('');
	}
});

result.reduce((a,b) => {return a.concat(b)}, [])

csvLanguagesStream.on('end', () => {
	console.log(body);
	console.log('result: ', );
	console.log("#########################");
});
