const express = require('express');
const router = express.Router();

const categoryService = require('../../services/category_service');
const categoryValidator = require('../../validators/category_validator');

function categoryModelToJson(model) {
	return {id: model._id, name: model.name, subjects: model.subjects};
}

router.route('/')
	.get((request, response) => {
		return new Promise((resolve, reject) => {
			resolve(categoryService.findAll());
		})
		.then((serviceResponse) => {
			response.status(200).json(serviceResponse.map((category) => { return categoryModelToJson(category); }));
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

router.route('/:categoryId')
	.get((request, response) => {
		return new Promise((resolve, reject) => {
			resolve(categoryService.findById(request.params.categoryId));
		}).then((category) => {
			response.status(200).json(categoryModelToJson(category));
		}).catch((e) => {
			response.status(e.status).json({message: e.message});
		});
	})
	.put((request, response) => {

	})
	.delete((request, response) => {
		return new Promise((resolve, reject) => {
			resolve(categoryService.delete(request.params.categoryId));
		}).then((message) => {
			response.status(204).json('');
		});
	});

module.exports = router;