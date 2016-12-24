var Chat = require('../model/chat');

module.exports = {
	findAll: function(callback) {
		Chat.find()
			.then((chats) => {
				callback(chats);
			});
	},
	add: function(chat, callback) {
		chat.save().then(callback);
	},
	findById: function(id, callback) {
		Chat.findById(id).exec()
			.then((chat) => {
				callback(chat);
			});
	},
	update: function(chatToUpdate, callback) {
		Chat.findById(chatToUpdate._id)
			.then((chat) => {
				chat.name = chatToUpdate.name;
				return chat;
			})
			.then((chat) => {
				chat.save(callback)
			})
			.catch((error) => {
				console.log('nao achou para atualizar', error);
			});
	},
	delete: function(id, callback) {
		Chat.findByIdAndRemove(id).exec()
			.then(callback);
	}
};