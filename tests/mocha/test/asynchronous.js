const assert = require('chai').assert;

class User {
	constructor(name) {
		this.name = name;
	}

	save(callback) {
		//console.log('saving in the database ..');
		setTimeout(() => { 
			// console.log('saved!'); 
			if(this.name == 'Richard') {
				this.id = 39;
				callback(null, this);
			} else { 
				callback('Invalid!', null);
			}
		}, 90);
	}
}

describe('User', () => {
	describe('#save', () => {

		it('when save return true', (done) => {
			let subject = new User('Richard');
			subject.save((error, doc) => {
				assert.isNull(error);
				assert.isDefined(doc.id);
				assert.equal(39, doc.id);

				done();
			});
		});


		it('when not save return false', (done) => {
			let subject = new User('Outro');
			
			subject.save((error, doc) => {
				assert.equal('Invalid!', error);
				assert.isNull(doc);

				done();
			});
		});
	});
});