const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const chaiAsPromised = require("chai-as-promised");
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

			return resolve( this.cepService.find(user.cep)
				.then(this.cepService.parse)
				.then((cep) => {
					return this.appendCepInUser(cep, user)
				})
				.then(FakeUserModel.save) );
		});
	}

	appendCepInUser(cep, user) {
		return Object.assign(user, cep);
	}
}

class FakeUserModel {
	static save(object) {
		return new Promise((resolve, reject) => {
			setTimeout(() => { 
				console.log('saving ' + JSON.stringify(object)) 
				if(object.name != 'DARA ERRO') {
					resolve(Object.assign(object, {id: 1}));
				} else {
					reject('ERRO BRABO NA HORA DE SALVAR!');
				}
			}, 500);
		});
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
		});
	});
});

describe('#UserService', () => {
	const userService = new UserService();

	describe('save', () => {
		beforeEach(() => {
			const request = {name: 'Richard', cep: '21745091'};
			result = userService.save(request);
			return;
		});

		it('when saving correctly the user should have id property', () => {
			return expect(result).to.eventually.to.have.property('id');
		});

		it('when saving correctly the user should be equal', () => {
			return expect(result).to.eventually
						.deep.equal({name:"Richard",cep:"21745091",address:"Terra do nunca",id: 1});
		});
	});

	describe('error save', () => {
		it('when error some data is invalid', () => {
			return expect( userService.save({}) ).to
									.eventually.be.rejectedWith('USUARIO INVALIDO');
		});

		it('when error on save user', () => {
			return expect( userService.save({name: 'DARA ERRO', cep: '21745091'}) )
								.to.eventually.be.rejectedWith('ERRO BRABO NA HORA DE SALVAR!');
		});
	});
});