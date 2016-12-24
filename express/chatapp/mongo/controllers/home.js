var express = require('express');
var router = express.Router();

router.get('', function(request, response) {
  response.render('home', { title: 'Home', username: request.user.name });
});

module.exports = router;