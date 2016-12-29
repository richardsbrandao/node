Array.prototype.flatten = function() {
    return this.reduce((a,b) => {return a.concat(b);}, []);
};

let assert = require('assert');

describe('Array', () => {
	describe('#indexOf', () => {
		const subject = [1,2,3];

		it('should return -1 if value is not present', () => {
			assert.equal(-1, subject.indexOf(4));
		});

		it('should return the position if value is present', () => {
			assert.equal(2, subject.indexOf(3));
		});
	});

	describe('#flatten', () => {
		const subject = [[1,2], [], [3,4,5], [6]];

		it('should flatten the array', () => {
			assert.deepEqual([1,2,3,4,5,6], subject.flatten());
		});
	});
});



