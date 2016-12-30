function node_env() {
	return process.env.NODE_ENV || 'dev';
}

const env_configs = require(`./config/environments/${node_env()}`);
const seeder = require('mongoose-seed');
const mongoose = require('mongoose');

let data = [
    {
        'model': 'User',
        'documents': [
            {name: 'richard', password: '123456', admin: true, _id: mongoose.Types.ObjectId("5854b66a0fe49e704644bfb4")},
            {name: 'raphael', password: '123456', admin: true, _id: mongoose.Types.ObjectId("5854b6650fe49e704644bfb3")}
        ]
    },
    {
    	'model': 'Chat',
    	'documents': [
    		{name: 'Ruby', _id: mongoose.Types.ObjectId("5855cd5b65a766aa7f72f473")},
    		{name: 'Java', _id: mongoose.Types.ObjectId("5855cd5e65a766aa7f72f474")},
    		{name: 'Node', _id: mongoose.Types.ObjectId("5855cd6165a766aa7f72f475")}
    	]
    },
    {
    	'model': 'Message',
    	'documents': [
	    	{text: 'Hello Ruby', userId: '5854b66a0fe49e704644bfb4', createdAt: new Date('2016-09-12'), chatId: '5855cd5b65a766aa7f72f473', _id: mongoose.Types.ObjectId("5855e2004e4f5f9cbf5e2bb2")},
			{text: 'Java is more popular', userId: '5854b66a0fe49e704644bfb4', createdAt: new Date('2016-09-12'), chatId: '5855cd5e65a766aa7f72f474', _id: mongoose.Types.ObjectId("5855e29ffd590b8e4343fe7e")},
			{text: 'Java is more verbose', userId: '5854b6650fe49e704644bfb3', createdAt: new Date('2016-09-12'), chatId: '5855cd5e65a766aa7f72f474', _id: mongoose.Types.ObjectId("5855e2a5fd590b8e4343fe7f")},
			{text: 'Ruby sucks', userId: '5854b6650fe49e704644bfb3', createdAt: new Date('2016-09-12'), chatId: '5855cd5b65a766aa7f72f473', _id: mongoose.Types.ObjectId("5855e2acfd590b8e4343fe80")},
			{text: 'Ruby is cleaner', userId: '5854b66a0fe49e704644bfb4', createdAt: new Date('2016-09-12'), chatId: '5855cd5b65a766aa7f72f473', _id: mongoose.Types.ObjectId("5855e2b2fd590b8e4343fe81")}
    	]
    }
];

seeder.connect(`mongodb://${env_configs.database.host}:${env_configs.database.port}/${env_configs.database.database}`, () => {
    seeder.loadModels([
        'model/chat.js',
        'model/message.js',
        'model/user.js'
    ]);
 
    seeder.clearModels(['Chat', 'Message', 'User'], function() {
        seeder.populateModels(data, () => {});
    });
});