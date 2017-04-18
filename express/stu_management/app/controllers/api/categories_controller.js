const express = require('express');
const router = express.Router();

const categoryService = require('../../services/category_service');
const categoryValidator = require('../../validators/category_validator');

router.route('/')
	.get((request, response) => {
		return new Promise((resolve, reject) => {
			resolve(categoryService.findAll());
		})
		.then((serviceResponse) => {
			response.status(200).json(serviceResponse);
		});
	})
	.post((request, response) => {
		return new Promise((resolve, reject) => {
			categoryValidator.validate(request.body);
			resolve(categoryService.save(request.body));
		}).then((category) => {
			response.status(201).json({id: category._id});
		}).catch((e) => {
			response.status(422).json({message: e.message});
		});
	});

module.exports = router;