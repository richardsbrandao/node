var mongoose = require('mongoose');

var Schema = mongoose.Schema

var UserSchema = new Schema({
	username: {type: String, required: true},
	password: {type: String, required: true},
	admin: {type: Boolean, required: true},
}, {collection: 'users'});

var User = mongoose.model('User', UserSchema);

module.exports = User;