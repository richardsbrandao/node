var mongoose = require('mongoose');
mongoose.connect('mongodb://services/chat'); 

var Schema = mongoose.Schema

var UserSchema = new Schema({
	name: {type: String, required: true},
	password: {type: String, required: true},
	admin: {type: Boolean, required: true},
}, {collection: 'users'});

var User = mongoose.model('User', UserSchema);

new Promise((resolve, reject) => {
	User.findOne({name: 'richard', password: '123456'}, (error, user) => {
		if(error == null && user != null) {
			resolve(user);
		} else {
			reject(error);
		}
	});
}).then((user) => {
	console.log('faz login ', user.name);
}).catch((error) => {
	console.log('nao vai ter login');
});