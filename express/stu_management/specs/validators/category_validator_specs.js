const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

describe('#CategoryValidator', () => {
	const categoryValidator = require('../../app/validators/category_validator');
	let request = null;

	beforeEach(() => {
		request = { name: 'Java', subjects: ['SpringBoot', 'FunctionalProgramming'] };
	});

	it('validate category', () => {
		categoryValidator.validate(request);
	});

	it('invalidate category by null name', () => {
		request.name = null;
		expect(categoryValidator.validate.bind(categoryValidator, request)).to.throw({message: 'Category name cannot be null', status: 422});
	});

	it('invalidate category by null subjects', () => {
		request.subjects = null;
		expect(categoryValidator.validate.bind(categoryValidator, request)).to.throw({message: 'Category subjects cannot be null', status: 422});

	});

	it('invalidate category by empty subjects', () => {
		request.subjects = [];
		expect(categoryValidator.validate.bind(categoryValidator, request)).to.throw({message: 'Category subjects cannot be empty', status: 422});
	});
});