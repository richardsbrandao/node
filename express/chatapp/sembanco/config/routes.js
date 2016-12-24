module.exports = function(app) {
	app.use('/', 	require('../middlewares/auth'));
	app.use(require('../middlewares/helpers/user_authentication'));
	
	app.use('/', 		require('../middlewares/home'));
	app.use('/users', 	require('../middlewares/users'));
	app.use('/api', 	require('../middlewares/api'))

	app.use(require('../middlewares/helpers/admin_authentication'));
	app.use('/admin/chats', 	require('../middlewares/chats'));
}