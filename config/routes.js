const express = require('express');

module.exports = function(server) {

  //API Routes
  const router = express.Router();
  server.use('/', router);

  //Registering API methods in router
  const itemService = require('../itens/services/authorService');
  itemService.register(router, '/author');

  const bookService = require('../itens/services/bookService');
  bookService.register(router, '/book');

  const bookinstanceService = require('../itens/services/bookinstanceService');
  bookinstanceService.register(router, '/bookinstance');

  const genreService = require('../itens/services/genreService');
  genreService.register(router, '/genre');
}