module.exports = function(app) {
	app.use('/api/users', require('../controller/user_controller'));
}