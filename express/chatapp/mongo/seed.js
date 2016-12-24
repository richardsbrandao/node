var mongoose = require('mongoose')

var User = require('./model/user');

mongoose.connect('mongodb://localhost/chat');

function status(error, document) {
	if(error) {
		console.log('invalido');
		return;
	}

	console.log(document);
}

User.remove(function(error, document) { 
	if(error) {
		return console.log('nao removeu tudo');
	}

	new User({name: 'richard', password: '123456', admin: true}).save(status);
	new User({name: 'raphael', password: '123456', admin: false}).save(status);
});

mongoose.connection.close()

// db.users.save({name: 'richard', password: '123456', admin: true, _id: ObjectId("5854b66a0fe49e704644bfb4")});
// db.users.save({name: 'raphael', password: '123456', admin: false, _id: ObjectId("5854b6650fe49e704644bfb3")});
// db.chats.save({name: 'Ruby', _id: ObjectId("5855cd5b65a766aa7f72f473")})
// db.chats.save({name: 'Java', _id: ObjectId("5855cd5e65a766aa7f72f474")}) 
// db.chats.save({name: 'Node', _id: ObjectId("5855cd6165a766aa7f72f475")}) 
// db.messages.save({text: 'Hello Ruby', userId: '5854b66a0fe49e704644bfb4', createdAt: new Date('2016-09-12'), chatId: '5855cd5b65a766aa7f72f473', _id: ObjectId("5855e2004e4f5f9cbf5e2bb2")})
// db.messages.save({text: 'Java is more popular', userId: '5854b66a0fe49e704644bfb4', createdAt: new Date('2016-09-12'), chatId: '5855cd5e65a766aa7f72f474', _id: ObjectId("5855e29ffd590b8e4343fe7e")})
// db.messages.save({text: 'Java is more verbose', userId: '5854b6650fe49e704644bfb3', createdAt: new Date('2016-09-12'), chatId: '5855cd5e65a766aa7f72f474', _id: ObjectId("5855e2a5fd590b8e4343fe7f")})
// db.messages.save({text: 'Ruby sucks', userId: '5854b6650fe49e704644bfb3', createdAt: new Date('2016-09-12'), chatId: '5855cd5b65a766aa7f72f473', _id: ObjectId("5855e2acfd590b8e4343fe80")})
// db.messages.save({text: 'Ruby is cleaner', userId: '5854b66a0fe49e704644bfb4', createdAt: new Date('2016-09-12'), chatId: '5855cd5b65a766aa7f72f473', _id: ObjectId("5855e2b2fd590b8e4343fe81")})

