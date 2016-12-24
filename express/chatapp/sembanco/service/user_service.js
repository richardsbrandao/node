var User = require('../model/user');

var uuid = require('node-uuid');
var _ = require('lodash');

var users = [
	new User('richard', '123456', true,  '49a95b0f-9d2c-480c-9942-5cfe6414fbe9'),
	new User('raphael', '123456', false, '9cb126b3-2271-41da-8833-2e8ce6ac375c'),
];

module.exports = {
	findByUsernameAndPassword: function(username, password) {
		return _.find(users, user => user.name == username && user.password == password );
	},
	findById: function(id) {
		return _.find(users, user => user.id == id);
	}
}