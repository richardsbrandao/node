var mongoose = require('mongoose');
var User = require('./user');

function showOne(error, doc) {
	if( error ) {
		return console.error(error);
	}
	console.log(doc);
}
mongoose.connect('mongodb://localhost/test');
UserService = {
	findById : function(id, callback) {
		//582116c003237e2c435cafba
		console.log('buscando por id ' + id);
		callback = callback || showOne;
		User.findById(id, showOne);
	},
	save: function(data) {
		console.log('salvando ' + data);
		user = new User(data);
		user.save(showOne);
	},
	findByName: function(name) {
		console.log('buscando por nome ' + name);
		User.find({name: name}, showOne);
	},
	findAll: function() {

	},
	delete: function(id) {
		console.log('removendo por id ' + id)
		User.findByIdAndRemove(id, showOne);
	},
	update: function(id, data) {
		console.log(`id=${id} data=${data.name}`)
		User.findByIdAndUpdate(id, data, showOne);
	}
}

module.exports = UserService