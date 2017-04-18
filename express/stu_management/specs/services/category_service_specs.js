const chai = require('chai');
const assert = chai.assert;

const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const seed = require('../bootstrap');

describe('#CategoryService', () => {
	const categoryService = require('../../app/services/category_service');

	before((done) => {
		seed.seedDatabase(done);
	});

	describe('#findAll', () => {
		it('find all categories', (done) => {
			categoryService.findAll()
					.then((allCategories) => {
						assert.isTrue(Array.isArray(allCategories), 'it should be an array');
						assert.equal(allCategories.length, 2);
						
						firstCategory = findById(allCategories, '58f17d8e0025cbef04a1ef39');

						assert.equal(firstCategory.id, '58f17d8e0025cbef04a1ef39');
						assert.equal(firstCategory.name, 'Ruby');
						
						assert.equal(firstCategory.subjects[0], "Rails");
						assert.equal(firstCategory.subjects[1], "ActiveRecord");
						assert.equal(firstCategory.subjects[2], "Sidekiq");
						assert.equal(firstCategory.subjects[3], "Concurrency");

						secondCategory = findById(allCategories, '58f17d8e0025cbef04a1ef40');
						assert.equal(secondCategory.id, '58f17d8e0025cbef04a1ef40');
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
});

function findById(allCategories, id) {
	return allCategories.filter((category) => {
		return category._id == id;
	})[0];
}