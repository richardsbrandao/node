var User = require('../model/user');

module.exports = {
	findByUsernameAndPassword: function(username, password) {
		return new Promise((resolve, reject) => {
			User.findOne({name: username, password: password}, (error, user) => {
				if(error == null && user != null) {
					resolve(user);
				} else {
					reject(error);
				}
			})
		});
	},
	findById: function(id, callback) {
		User.findById(id)
			.then(callback);
	}
}