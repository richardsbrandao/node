var express = require('express');
var router = express.Router();

var Chat = require('../model/chat');
var chatService = require('../service/chat_service');

router.route('/')
	.get(function(request, response) {
		var chats = chatService.findAll();
		response.render('chats/index', { title: 'Listar Chats', chats: chats });
	})
	.post(function(request, response) {
		var chat = new Chat( request.body.name );
		chatService.add(chat);
		response.redirect('/chats');
	});

router.get('/create', function(request, response) {
  	response.render('chats/create', { title: 'Criar Chat' });
});

router.get('/edit/:id', function(request, response) {
	chat = chatService.findById(request.params.id);
  	response.render('chats/edit', { title: 'Editar Chat', chat: chat });
});

router.post('/update', function(request, response) {
	chatService.update(new Chat(request.body.name, request.body.id));
	response.redirect('/chats');
});

router.get('/delete/:id', function(request, response) {
	chatService.delete(request.params.id);
	response.redirect('/chats');
});

module.exports = router;