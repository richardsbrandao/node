module.exports = function(request, response, next) {
	if(request.user.admin) {
		next();
		return;
	}
	response.redirect('/login');
}