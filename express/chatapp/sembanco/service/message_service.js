var Message = require('../model/message');
var userService = require('./user_service');

var uuid = require('node-uuid');
var moment = require('moment');
var _ = require('lodash');

var messages = [
	new Message('Hello Ruby', 			'49a95b0f-9d2c-480c-9942-5cfe6414fbe9', 	moment().subtract(30, 'seconds').format('DD/MM/YYYY HH:mm:ss'), 'b547985c-1490-4fa8-a1d3-56d1c5c435e1', uuid.v4()),
	new Message('Java is more popular', '9cb126b3-2271-41da-8833-2e8ce6ac375c', 	moment().subtract(20, 'seconds').format('DD/MM/YYYY HH:mm:ss'), 'da663385-4653-4602-93e6-985de4be59d1', uuid.v4()),
	new Message('Java is more verbose', '49a95b0f-9d2c-480c-9942-5cfe6414fbe9', 	moment().subtract(14, 'seconds').format('DD/MM/YYYY HH:mm:ss'), 'da663385-4653-4602-93e6-985de4be59d1', uuid.v4()),
	new Message('Ruby sucks', 			'9cb126b3-2271-41da-8833-2e8ce6ac375c', 	moment().subtract(10, 'seconds').format('DD/MM/YYYY HH:mm:ss'), 'b547985c-1490-4fa8-a1d3-56d1c5c435e1', uuid.v4()),
	new Message('Ruby is cleaner', 		'49a95b0f-9d2c-480c-9942-5cfe6414fbe9',		moment().subtract(9, 'seconds').format('DD/MM/YYYY HH:mm:ss'),  'b547985c-1490-4fa8-a1d3-56d1c5c435e1', uuid.v4())
];

module.exports = {
	findAll: function(chatId) {
		return _.filter(messages, function(message) { return message.chatId == chatId })
					.map(message => {
						user = userService.findById(message.userId);
						message.setUser(user);
						return message;
					});
	},
	add: function(message) {
		message.setId(uuid.v4());
		messages.push(message);
	}
}