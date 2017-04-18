const chai = require('chai');
const expect = chai.expect
const assert = chai.assert;

describe('#CategoryValidator', () => {
	const categoryValidator = require('../../app/validators/category_validator');
	let request = null

	beforeEach(() => {
		request = { name: 'Java', subjects: ['SpringBoot', 'FunctionalProgramming'] }
	})

	it('validate category', () => {
		categoryValidator.validate(request);
	});

	it('invalidate category by null name', () => {
		request.name = null;
		expect(categoryValidator.validate.bind(categoryValidator, request)).to.throw('Category name cannot be null');
	});

	it('invalidate category by null subjects', () => {
		request.subjects = null;
		expect(categoryValidator.validate.bind(categoryValidator, request)).to.throw('Category subjects cannot be null');

	});

	it('invalidate category by empty subjects', () => {
		request.subjects = [];
		expect(categoryValidator.validate.bind(categoryValidator, request)).to.throw('Category subjects cannot be empty');
	});
});