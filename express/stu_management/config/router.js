config = require('./environment').current();

module.exports = (app) => {
	app.use(`${config.contextRoot}/api/categories`, require('../app/controllers/api/categories_controller'));
	app.use(`${config.contextRoot}/api/cases`, 		require('../app/controllers/api/cases_controller'));
};