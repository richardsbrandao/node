var readlineSync = require('readline-sync');
var _ = require('lodash');
const readline = require('readline');
var UserService = require('./user_service');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function answerTreatment(option) {
	switch(option) {
		case '1':
			askForData(function(data) {
				UserService.save(data);
			})
			break;
		case '2':
			askForField('ID', function(id) {
				UserService.findById(id);
			});
			break;
		case '3':
			askForField('Name', function(name) {
				UserService.findByName(name);
			});
			break;
		case '4':
			askForField('ID', function(id) {
				askForData(function(data) {
					UserService.update(id, data)
				});
			});
			break;
		case '5':
			askForField('ID', function(id) {
				UserService.delete(id);
			});
			break;
	}
}

function askForData(callback) {
	data = {
		name: readlineSync.question('Nome: '),
		gender: readlineSync.question('\nGender: '),
		cpf: readlineSync.question('\nCPF: ')
	}
	callback(data);
}

function askForField(name, callback) {
	callback(readlineSync.question(name+': '));
}

module.exports = function(question) {
	rl.question(question, (answer) => {
		if( !_.includes(['1','2','3','4','5'], answer) ) {
			return askForAnswer(question, answerTreatment);
		}
		answerTreatment(answer)
  		rl.close();
	});
}