var express = require('express');
var moment = require('moment');

var Message = require('../model/message');

var chatService = require('../service/chat_service');
var messageService = require('../service/message_service');

var router = express.Router();

router.route('/chats/:chatId/messages')
	.get(function(request, response) {
		messageService.findAll(request.params.chatId, (messages) => {
			response.json(messages);
		});
	})
	.post(function(request, response) {
		var chatId = request.params.chatId;
		var message = new Message({ text: request.body.text, userId: request.user._id, createdAt: new Date(), chatId: chatId });
		messageService.add(message, (message) => {
			response.status(201).json(message);
		});
	});

router.get('/chats', function(request, response) {
	chatService.findAll((chats) => {
		response.json(chats)
	});
});

module.exports = router;