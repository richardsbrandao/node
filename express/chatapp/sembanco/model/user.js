var User = function(name, password, admin, id) {
	this.name = name;
	this.password = password;
	this.admin = admin;
	this.id = id;

	this.setId = function(id) {
		this.id = id;
	}
}

module.exports = User;