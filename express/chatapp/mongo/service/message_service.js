var Message = require('../model/message');
var userService = require('./user_service');

function findOwnerMessage(message) {
	return new Promise((resolve) => {
						userService.findById(message.userId, (user) => {
							message.user = user;
							resolve(message);
						})
					})
}


module.exports = {
	findAll: function(chatId, callback) {
		Message.find({chatId: chatId}, (error, messages) => {
			Promise.all(messages.map(findOwnerMessage))
					.then(callback);
		});
	},
	add: function(message, callback) {
		message.save()
			.then(findOwnerMessage)
			.then(callback);
	}
}