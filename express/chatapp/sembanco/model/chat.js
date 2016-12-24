var Chat = function(name, id) {
	this.name = name;
	this.id = id;

	this.setId = function(id) {
		this.id = id;
	}
}

module.exports = Chat;