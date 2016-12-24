var Chat = require('../model/chat');
var uuid = require('node-uuid');
var _ = require('lodash');

var chats = [
	new Chat('Java', 'da663385-4653-4602-93e6-985de4be59d1'),
	new Chat('Node', '0c5e6108-6006-4baf-a00d-cb5e05e62093'),
	new Chat('Ruby', 'b547985c-1490-4fa8-a1d3-56d1c5c435e1')
];

module.exports = {
	findAll: function() {
		return chats;
	},
	add: function(chat) {
		chat.setId( uuid.v4() );
		chats.push(chat);
	},
	findById: function(id) {
		var chat = _.filter(chats, function(o) { return o.id == id });

		if(!chat.length) {
			//throw new 
			return null;
		}

		return chat[0];
	},
	update: function(chat) {
		savedChat = this.findById(chat.id);
		for(var i in chats) {
			if(chats[i].id == chat.id) {
				chats[i] = chat;
			}
		}
	},
	delete: function(id) {
		chats = _.filter(chats, function(o) { return o.id != id });
	}
};