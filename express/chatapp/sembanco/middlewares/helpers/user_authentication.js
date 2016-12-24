module.exports = function(request, response, next) {
	if( request.isAuthenticated()) {
		next();
		return;
	}
	response.redirect('/admin/login');
}