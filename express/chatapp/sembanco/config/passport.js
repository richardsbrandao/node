var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var userService = require('../service/user_service');

passport.use(new LocalStrategy(function(username, password, done) {
	user = userService.findByUsernameAndPassword(username, password);
	
	if(!user) {
		done(null, false);
		return;
	}

	done(null, user);
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