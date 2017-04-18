const seeder = require('mongoose-seed');
const mongoose = require('mongoose');
const config = require('../config/environment').current();

module.exports = {
	seedDatabase: function(callback) {
		let data = [
		    {
		        'model': 'Category',
		        'documents': [
		            { "_id" : mongoose.Types.ObjectId("58f17d8e0025cbef04a1ef39"), "name" : "Ruby", "subjects" : [ "Rails", "ActiveRecord", "Sidekiq", "Concurrency" ] },
		            { "_id" : mongoose.Types.ObjectId("58f17d8e0025cbef04a1ef40"), "name" : "Java", "subjects" : [ "Spring Boot", 'Micro Services', 'Functional Programming' ] }
		        ]
		    }
		];

		seeder.connect(`mongodb://${config.database.host}:${config.database.port}/${config.database.database}`, () => {
		    seeder.loadModels([
		        './app/models/category',
		    ]);

		    seeder.clearModels(['Category'], function() {
		        seeder.populateModels(data, () => {  });
		        callback();
		    });
		});
	}
}