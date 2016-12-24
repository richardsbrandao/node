var express = require('express');
var moment = require('moment');

var Message = require('../model/message');

var chatService = require('../service/chat_service');
var messageService = require('../service/message_service');

var router = express.Router();

router.route('/chats/:chatId/messages')
	.get(function(request, response) {
		var chatId = request.params.chatId
		var messages = messageService.findAll(chatId);
		response.json(messages);
	})
	.post(function(request, response) {
		var chatId = request.params.chatId;
		var message = new Message(request.body.text, request.user.id, moment().format('DD/MM/YYYY HH:mm:ss'), chatId);
		message.setUser(request.user);
		messageService.add(message);
		response.status(201).json(message);
	});

router.get('/chats', function(request, response) {
	chats = chatService.findAll();
	response.json(chats)
});

module.exports = router;