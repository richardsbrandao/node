const chai = require('chai');
const assert = chai.assert;
const should = chai.should();
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const chaiHttp = require('chai-http');

chai.use(sinonChai);
chai.use(chaiHttp);

const seed = require('../bootstrap');
const server = require('../../app');

const categoryService = require('../../app/services/category_service');

describe('#Categories', () => {
	const RUBY_ID_ITEM = '58f17d8e0025cbef04a1ef39';

	beforeEach((done) => {
		seed.seedDatabase(done);
	});

	describe('#findAll', () => {
		it('find all categories', (done) => {
			categoryServiceSpy = sinon.spy(categoryService, 'findAll');

			chai.request(server)
					.get('/stu_management/api/categories')
					.end((error, response) => {
						response.should.have.status(200);

						response.body.forEach((category) => {
							assert.equal(Object.keys(category).length, 3);
								
							assert.include(Object.keys(category), 'id');
							assert.include(Object.keys(category), 'name');
							assert.include(Object.keys(category), 'subjects');
						});

						assert.equal( 1, categoryServiceSpy.callCount );
						categoryServiceSpy.restore();
						done();
					});
		});
	});

	describe('#save', () => {
		const url = '/stu_management/api/categories';
		let request = {};

		beforeEach(() => {
			request = { name: 'Shell Script', subjects: ['Redes', 'Logs'] }
		});

		it('save category', (done) => {
			categoryServiceSpy = sinon.spy(categoryService, 'save');

			chai.request(server)
					.post(url)
					.send(request)
					.end((error, response) => {
						response.should.have.status(201);

						assert.equal( 1, categoryServiceSpy.callCount );
						assert.isNotNull( response.body.id );

						categoryServiceSpy.restore();
						done();
					});
		});

		it('save invalid category returns 422', (done) => {
			request.name = null;
			categoryServiceSpy = sinon.spy(categoryService, 'save');

			chai.request(server)
					.post(url)
					.send(request)
					.end((error, response) => {
						response.should.have.status(422);

						assert.equal( 0, categoryServiceSpy.callCount );
						assert.equal( response.body.message, 'Category name cannot be null' );

						categoryServiceSpy.restore();
						done();
					});

		});
	});

	describe('#findById', () => {
		it('find category by id', (done) => {
			categoryServiceSpy = sinon.spy(categoryService, 'findById');

			chai.request(server)
					.get(`/stu_management/api/categories/${RUBY_ID_ITEM}`)
					.end((error, response) => {
						response.should.have.status(200);

						assert.equal(response.body.id, RUBY_ID_ITEM);
						assert.equal(response.body.name, 'Ruby');
						
						assert.equal(response.body.subjects.length, 4);

						assert.equal( 1, categoryServiceSpy.callCount );
						categoryServiceSpy.restore();
						done();
					});
		});
	});
});