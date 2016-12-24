var express = require('express');
var router = express.Router();

var Chat = require('../model/chat');
var chatService = require('../service/chat_service');

router.route('/')
	.get(function(request, response) {
		chatService.findAll((chats) => {
			response.render('chats/index', { title: 'Listar Chats', chats: chats, username: request.user.name });
		});
	})
	.post(function(request, response) {
		var chat = new Chat();
		chat.name = request.body.name
		chatService.add(chat, () => { response.redirect('/admin/chats') });
	});

router.get('/create', function(request, response) {
  	response.render('chats/create', { title: 'Criar Chat', username: request.user.name });
});

router.get('/edit/:id', function(request, response) {
	chatService.findById(request.params.id, (chat) => {
  		response.render('chats/edit', { title: 'Editar Chat', chat: chat, username: request.user.name });
	});
});

router.post('/update', function(request, response) {
	var chat = new Chat();
	chat._id = request.body.id;
	chat.name = request.body.name;
	
	chatService.update(chat, () => {
		response.redirect('/admin/chats');
	});
});

router.get('/delete/:id', function(request, response) {
	chatService.delete(request.params.id, () => {
		response.redirect('/admin/chats');
	});
});

module.exports = router;