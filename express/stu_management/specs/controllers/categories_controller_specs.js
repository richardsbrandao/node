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
	before((done) => {
		seed.seedDatabase(done);
	});

	describe('#findAll', () => {
		it('find all categories', (done) => {
			categoryServiceSpy = sinon.spy(categoryService, 'findAll');

			chai.request(server)
					.get('/stu_management/api/categories')
					.end((error, response) => {
						response.should.have.status(200);

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
});