const connection = require('../../config/database').connection;
const Category = connection.model('Category');

module.exports = {
	findAll: () => {
		return new Promise((resolve, reject) => {
			resolve(Category.find());
		});
	},
	save: (categoryReq) => {
		return new Promise((resolve, reject) => {
			const category = new Category();
			category.name = categoryReq.name;
			category.subjects = categoryReq.subjects;
			resolve(category.save())
		});
	}
};