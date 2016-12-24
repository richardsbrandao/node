var express = require('express');
var router = express.Router();
var passport = require('passport');

router.route('/login')
	.get(function(request, response) {
  		response.render('auth/login', { title: 'Login', redirect: '' });
	})
	.post(passport.authenticate('local', {
		successRedirect: '/',
		failureRedirect: '/auth/login'
	}));

router.route('/admin/login')
	.get(function(request, response) {
  		response.render('auth/login', { title: 'ADMIN', redirect: '/admin' });
	})
	.post(passport.authenticate('local', {
		successRedirect: '/admin/chats',
		failureRedirect: '/admin/login'
	}));

router.route('/logout')
	.get(function(request, response) {
		request.logout();
		response.redirect('/login');
	});

module.exports = router