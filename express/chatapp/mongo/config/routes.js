module.exports = function(app) {
	app.use('/api', 	require('../controllers/api'))
	app.use('/', 	require('../controllers/auth'));
	app.use(require('../middlewares/user_authentication'));
	
	app.use('/', 		require('../controllers/home'));
	app.use('/users', 	require('../controllers/users'));

	app.use(require('../middlewares/admin_authentication'));
	app.use('/admin/chats', 	require('../controllers/chats'));
}