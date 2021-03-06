const chai = require('chai');
const assert = chai.assert;

const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const seed = require('../bootstrap');

describe('#CategoryService', () => {
	const categoryService = require('../../app/services/category_service');
	const RUBY_ID_ITEM = '58f17d8e0025cbef04a1ef39';
	const JAVA_ID_ITEM = '58f17d8e0025cbef04a1ef40';

	beforeEach((done) => {
		seed.seedDatabase(done);
	});

	describe('#findAll', () => {
		it('find all categories with pagination', (done) => {
			categoryService.findAll({page: 1, limit: 2})
					.then((result) => {
						assert.equal(result.total, 2);
						assert.equal(result.limit, 2);
						assert.equal(result.page, 1);
						assert.equal(result.pages, 1);

						assert.isTrue(Array.isArray(result.docs), 'it should be an array');
						assert.equal(result.docs.length, 2);
						
						firstCategory = findById(result.docs, RUBY_ID_ITEM);

						assert.equal(firstCategory.id, RUBY_ID_ITEM);
						assert.equal(firstCategory.name, 'Ruby');
						
						assert.equal(firstCategory.subjects[0], "Rails");
						assert.equal(firstCategory.subjects[1], "ActiveRecord");
						assert.equal(firstCategory.subjects[2], "Sidekiq");
						assert.equal(firstCategory.subjects[3], "Concurrency");

						secondCategory = findById(result.docs, JAVA_ID_ITEM);
						assert.equal(secondCategory.id, JAVA_ID_ITEM);
						assert.equal(secondCategory.name, 'Java');
						
						assert.equal(secondCategory.subjects[0], "Spring Boot");
						assert.equal(secondCategory.subjects[1], 'Micro Services');
						assert.equal(secondCategory.subjects[2], 'Functional Programming');
						done();
					});
		});
	});

	describe('#save', () => {
		it('save category', (done) => {
			const category = { name: 'Shell Script', subjects: ['Redes', 'Logs'] };
			categoryService.save(category)
					.then((savedCategory) => {
						assert.isNotNull(savedCategory._id);

						assert.equal(savedCategory.name, 'Shell Script');

						assert.equal(savedCategory.subjects[0], 'Redes');
						assert.equal(savedCategory.subjects[1], 'Logs');
						
						done();
					});
		});
	});

	describe('#findById', () => {
		it('find category by id', (done) => {
			categoryService.findById(RUBY_ID_ITEM)
					.then((category) => {
						assert.equal(category.id, RUBY_ID_ITEM);
						assert.equal(category.name, 'Ruby');
						
						assert.equal(category.subjects[0], "Rails");
						assert.equal(category.subjects[1], "ActiveRecord");
						assert.equal(category.subjects[2], "Sidekiq");
						assert.equal(category.subjects[3], "Concurrency");

						done();
					});
		});

		it('do not find category by inexistent id', (done) => {
			categoryService.findById('58f17d8e0025cbef04a1ef00')
					.catch((e) => {
						assert.equal(e.status, 404);
						assert.equal(e.message, 'Category not found');
						
						done();
					});
		});

		it('do not find category by invalid id', (done) => {
			categoryService.findById('INVALID')
					.catch((e) => {
						assert.equal(e.status, 404);
						assert.equal(e.message, 'Category not found');
						
						done();
					});
		});
	});

	describe('#delete', (done) => {
		it('remove existent category', (done) => {
			categoryService.delete(RUBY_ID_ITEM)
					.then((removedItem) => {
						assert.equal(removedItem._id, RUBY_ID_ITEM);

						const connection = require('../../config/database').connection;
						const Category = connection.model('Category');

						Category.findById(RUBY_ID_ITEM).exec().then((category) => {
							assert.isNull(category);

							done();
						});
					});
		});

		it('remove inexistent category', (done) => {
			categoryService.delete('58f17d8e0025cbef04a1ef00')
					.then((message) => {
						assert.isNull(message);

						done();
					});
		});

		it('remove by invalid id', (done) => {
			categoryService.delete('INVALID')
					.catch((e) => {
						assert.equal(e.status, 404);
						assert.equal(e.message, 'Category not found');
						
						done();
					});
		});
	});

	describe('#update', () => {
		const categoryToUpdate = {name: 'Ruby on Rails', subjects: ['ActiveRecord', 'Rails Caching']};

		it('update category', (done) => {
			categoryService.update('58f17d8e0025cbef04a1ef39', categoryToUpdate)
								.then((updateResult) => {
									assert.equal(updateResult.nModified, 1);
									done();
								});
		});

		it('update inexistent category', (done) => {
			categoryService.update('58f17d8e0025cbef04a1ef00', categoryToUpdate)
								.catch((e) => {
									assert.equal(e.status, 404);
									assert.equal(e.message, 'Category not found');
									
									done();
								});
		});

		it('update invalid category', (done) => {
			categoryService.delete('INVALID')
					.catch((e) => {
						assert.equal(e.status, 404);
						assert.equal(e.message, 'Category not found');
						
						done();
					});
		});
	});
});

function findById(allCategories, id) {
	return allCategories.filter((category) => {
		return category._id == id;
	})[0];
}