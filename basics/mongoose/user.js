var mongoose = require('mongoose');

var Schema = mongoose.Schema

var UserSchema = new Schema({
	name: {type: String, required: true},
	gender: String,
	cpf: String
}, {collection: 'user-data'});

var User = mongoose.model('User', UserSchema);

module.exports = User;