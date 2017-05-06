module.exports = {
	dev: {
		http: {
			port: 9000
		},
		database: {
			host: 'services',
			port: '27017',
			database: 'stu_management_dev'
		},
		contextRoot: '/stu_management'
	},
	test: {
		http: {
			port: 9001
		},
		database: {
			host: 'services',
			port: '27017',
			database: 'stu_management_test'
		},
		contextRoot: '/stu_management'
	},
	current: function() {
		return this[process.env.NODE_ENV || 'dev'];
	}
};