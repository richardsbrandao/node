var express = require('express');
var router = express.Router();

router.get('/create', function(request, response) {
  response.render('users/create', { title: 'Criar Usuário' });
});

module.exports = router;