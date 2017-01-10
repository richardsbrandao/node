var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

function findCepPromise(cep) {
	return new Promise((resolve, reject) => {
		if(cep.length == 8) {
			setTimeout(() => { 
				resolve(`{"cep": "${cep}", "address": "Terra do nunca"}`)
			}, 1000);
		} else {
			reject('CEP INVALIDO');
		}
	});
}

function parse(content) {
	return JSON.parse(content);
}

function errorHandler(error) {
	console.error('Deu erro brabo! ' + error);
}

class UserService {
	save(user) {
		if(! user.name || ! user.cep) {
			throw new Error('USUARIO INVALIDO')
		}
		findCepPromise(user.cep)
			.then(parse)
			.then((cep) => {
				return this.appendCepInUser(cep, user)
			})
			.then((user) => {
				return new Promise((resolve, reject) => {
					FakeUserModel.save(user)
				});
			});
	}

	appendCepInUser(cep, user) {
		return Object.assign(user, cep);
	}
}

class FakeUserModel {
	static save(object) {
		setTimeout(() => { console.log('saving ' + JSON.stringify(object)) }, 1000);
	}
}

new UserService().save({name: 'Richard', cep: '21745091'})

describe('#Promise', () => {
	describe('findCepPromise', () => {
		it('when cep is valid', () => {
			const expectedReturn = `{"cep": "21745091", "address": "Terra do nunca"}`;
			return expect(findCepPromise('21745091')).to.eventually.equal(expectedReturn);
		});

		it('when cep is invalid', () => {
			return expect(findCepPromise('21745')).to.be.rejectedWith('CEP INVALIDO');
		})
	});
});

describe('#UserService', () => {
	describe('save', () => {
		const userService = new UserService();

		it('when saving correctly the user', () => {
			return expect(
						userService.save({name: 'Richard', cep: '21745091'})
					).to.eventually.equal('saving {"name":"Richard","cep":"21745091","address":"Terra do nunca"}');
		});

		it('when error on save user', () => {

		});

		it('when some data is invalid', () => {

		});
	})
})