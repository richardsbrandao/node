const chai = require('chai');
const mongoose = require('mongoose');
mongoose.connect('mongodb://services/chat');

describe('UserService', () => {
	const userService = require('../../service/user_service')

	describe('#findById', () => {
		it('should return a user', (done) => {
			userService.findById('5854b66a0fe49e704644bfb', (doc) => {
				chai.assert.isDefined(doc);
				done();
			});
		});
	});
})