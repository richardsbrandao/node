var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var userService = require('../service/user_service');

passport.use(new LocalStrategy(function(username, password, done) {
	userService.findByUsernameAndPassword(username, password)
		.then((user) => {
			done(null, user);
		})
		.catch((error) => {
			done(null, false);
		});
}));

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});

module.exports = function(app) {
	app.use(require('express-session')(
		{ secret: 'keyboard cat', resave: false,  saveUninitialized: false }
	));
	app.use(passport.initialize());
	app.use(passport.session());
}