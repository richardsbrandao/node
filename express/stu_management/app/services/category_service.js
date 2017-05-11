const connection = require('../../config/database').connection;
const Category = connection.model('Category');
const isValidObjectId = require('mongoose').Types.ObjectId.isValid;

const self = module.exports = {
	findAll: (pagination) => {
		return new Promise((resolve, reject) => {
			resolve(Category.paginate({}, pagination));
		});
	},
	save: (categoryReq) => {
		return new Promise((resolve, reject) => {
			const category = new Category();
			category.name = categoryReq.name;
			category.subjects = categoryReq.subjects;
			resolve(category.save());
		});
	},
	findById: (id) => {
		return new Promise((resolve, reject) => {
			if( ! isValidObjectId(id) ) {
				return reject({message: 'Category not found', status: 404});
			}
			resolve(Category.findById(id).exec());
		}).then((category) => {
			if( category === null ) {
				throw {message: 'Category not found', status: 404};
			}

			return category;
		});
	},
	delete: (id) => {
		return new Promise((resolve, reject) => {
			if( ! isValidObjectId(id) ) {
				return reject({message: 'Category not found', status: 404});
			}
			resolve(Category.findByIdAndRemove(id).exec());
		});
	},
	update: (id, categoryToUpdate) => {
		return self.findById(id)
					.then((category) => {
						return new Promise((resolve) => {
							resolve( Category.update({_id: category.id}, categoryToUpdate).exec() );	
						});
					});
	}
};