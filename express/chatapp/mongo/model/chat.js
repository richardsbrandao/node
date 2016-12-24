var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChatSchema = new Schema({
	name: {type: String, require: true}
}, {collection: 'chats'});

var Chat = mongoose.model('Chat', ChatSchema);

module.exports = Chat;