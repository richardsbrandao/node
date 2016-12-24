var Message = function(text, userId, createdAt, chatId, id) {
	this.text = text;
	this.userId = userId;
	this.createdAt = createdAt;
	this.chatId = chatId;
	this.id = id;

	this.setId = function(id) {
		this.id = id;
	}
	this.setUser = function(user) {
		this.user = user;
	}
}

module.exports = Message;