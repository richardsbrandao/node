var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

class CepService {
	find(cep) {
		return new Promise((resolve, reject) => {
			if(cep && cep.length == 8) {
				setTimeout(() => { 
					resolve(`{"cep": "${cep}", "address": "Terra do nunca"}`)
				}, 1000);
			} else {
				reject('CEP INVALIDO');
			}
		});
	}

	parse(content) {
		return JSON.parse(content);
	}
}

class UserService {
	constructor() {
		this.cepService = new CepService();
	}

	save(user, callback) {
		return new Promise((resolve, reject) => {
			if(! user.name || ! user.cep) {
				return reject('USUARIO INVALIDO');
			}

			this.cepService.find(user.cep)
				.then(this.cepService.parse)
				.then((cep) => {
					return this.appendCepInUser(cep, user)
				})
				.then((user) => {
					return new Promise((resolve, reject) => {
						resolve(FakeUserModel.save(user, callback));
					})
				});
		});
	}

	appendCepInUser(cep, user) {
		return Object.assign(user, cep);
	}
}

class FakeUserModel {
	static save(object, callback) {
		setTimeout(() => { 
			console.log('saving ' + JSON.stringify(object)) 
			if(object.name != 'DARA ERRO') {
				callback(null, Object.assign(object, {id: 1}));
			} else {
				callback('ERRO BRABO NA HORA DE SALVAR!', null);
			}
		}, 500);
	}
}

describe('#CepService', () => {
	describe('find', () => {
		it('when cep is valid', () => {
			const expectedReturn = `{"cep": "21745091", "address": "Terra do nunca"}`;
			return expect(new CepService().find('21745091')).to.eventually.equal(expectedReturn);
		});

		it('when cep is invalid', () => {
			return expect(new CepService().find('21745')).to.be.rejectedWith('CEP INVALIDO');
		})

	});
});

describe('#UserService', () => {
	describe('save', () => {
		const userService = new UserService();

		it('when saving correctly the user', (done) => {
			userService.save({name: 'Richard', cep: '21745091'}, (error, user) => {
				assert.equal(1, user.id);
				assert.equal('Terra do nunca', user.address);
				done();
			});
		});

		it('when error on save user', (done) => {
			// return expect( userService.save({}) ).to.be.rejectedWith('USUARIO INVALIDO');
			userService.save({}).catch((error) => {
				//assert.equal('USUARIO INVALIDO', error);
				done();
			});
		});

		it('when some data is invalid', (done) => {
			userService.save({name: 'DARA ERRO', cep: '21745091'}, (error, user) => {
				assert.isNull(user);
				assert.equal('ERRO BRABO NA HORA DE SALVAR!', error);
				done();
			});
		});
	})
})