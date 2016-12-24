var mongoose = require('mongoose')

var User = require('./model/user');

mongoose.connect('mongodb://localhost/chat');

function status(error, document) {
	if(error) {
		console.log('invalido');
		return;
	}

	console.log(document);
}

User.remove(function(error, document) { 
	if(error) {
		return console.log('nao removeu tudo');
	}

	new User({name: 'richard', password: '123456', admin: true}).save(status);
	new User({name: 'raphael', password: '123456', admin: false}).save(status);
});

mongoose.connection.close()

// db.users.save({name: 'richard', password: '123456', admin: true});
// db.users.save({name: 'raphael', password: '123456', admin: false});