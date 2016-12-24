var express = require('express');
var router = express.Router();
var User = require('../model/user');

router.route('/')
	.get(function(request, response) {
		console.log('buscando todos os usuarios');
		User.find()
			.then((users) => response.json(users));
	})
	.post(function(request, response) {
		console.log('create user')
		response.status(201).json({name: 'create!'})
	});

router.route('/:userId')
	.get(function(request, response) {
		var userId = request.params.userId;		
		User.findById(userId, function(error, user) {
			if(error) {
				response.status(500).json({message: 'Deu erro!'});
				return;
			}
			if(user == null) {
				response.status(404).json({message: 'Usuario nao encontrado'});
			}
			response.json(user);
		})
	})
	.put(function(request, response) {
		var userId = request.params.userId;
		var data = request.body

		User.findOneAndUpdate(userId, data, {new: true}, (error, user) => {
			if(error) {
				response.status(500).json({message: error.message});
				return;
			}
			console.log("foi "+user);
			response.json(user);
		});
	})
	.delete(function(request, response) {
		var id = request.params.userId;
		User.findByIdAndRemove(id, function(error, user) {
			if(error) {
				response.status(404).json({message: 'Usuario nao encontrado'});
				return;
			}

			response.status(204).json();
		});
	});


module.exports = router;