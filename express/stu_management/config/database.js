const mongoose = require('mongoose');

class DatabaseManagement {
	init(databaseConfig) {
		mongoose.Promise = global.Promise;
		
		const options = {
				server: { socketOptions: {keepAlive: 1} }
		};

		this.connection = mongoose.createConnection(`mongodb://${databaseConfig.host}:${databaseConfig.port}/${databaseConfig.database}`, options);

		this.connection.once('open', ()=> {console.log('MongoDb connection created')});

		require('../app/models/category');
	}
}

module.exports = new DatabaseManagement();