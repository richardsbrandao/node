
function *loopStream() {
	let i = 0;

	while(true) {
		yield i++;
	}
}

const number = loopStream();

console.log(`>>> ${number.next().value}`);
console.log(`>>> ${number.next().value}`);
console.log(`>>> ${number.next().value}`);
debug(number.next());

function debug(obj) {
	let properties = '';
	for(var i in obj) {
		properties += `${i} => ${obj[i]}\n`;
	}
	console.log(properties);
}

console.log("#########################");

const fs = require('fs');
const csvLanguagesStream = fs.createReadStream('./data/languages.csv', {encoding: 'utf8'/*, highWaterMark: 40*/});

let result = ''
csvLanguagesStream.on('data', (line) => {
	result = line.split(/\r?\n/)
						.map((languageWithCreation) => languageWithCreation.split(','))
						.filter((languageWithCreationSplitted) => languageWithCreationSplitted[1] > 1991)
						.map((newstLanguages) => newstLanguages[0]);
});

csvLanguagesStream.on('end', () => {
	console.log('result: ', result);
	console.log("#########################");
});
