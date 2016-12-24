var readlineSync = require('readline-sync');
var _ = require('lodash');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askForAnswer(question) {
	rl.question(question, (answer) => {
		if( !_.includes(['1','2','3','4','5'], answer) ) {
			return askForAnswer(question, answerTreatment);
		}
		answerTreatment(answer)
  		rl.close();
	});
}

function answerTreatment(option) {
	switch(option) {
		case '1':
			askForCreate(function(data) {
				
			})
			break;
		case '2':
			askForField('ID', function(id) {
				
			});
			break;
		case '3':
			askForField('Name', function(name) {
				
			});
			break;
		case '4':
			askForField('ID', function(id) {
				askForCreate(function(data) {
					
				});
			});
			break;
		case '5':
			askForField('ID', function(id) {
				
			});
			break;
	}
}

module.exports = askForAnswer