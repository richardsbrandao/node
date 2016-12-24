var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
	text: {type: String, require: true},
	userId: {type: String, require: true},
	createdAt: {type: Date, require: true},
	chatId: {type: String, require: true},
	user: {type: Object, require: false},
}, {collection: 'messages'});

var Message = mongoose.model('Message', MessageSchema);

module.exports = Message;