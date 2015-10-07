var express = require('express');
var router = express.Router();
var books = require('../models/books.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  books()
  .booksList()
  .then(function (response) {
  console.log(response.data)
  res.render('index', { title: 'A Bookshelf app',
                        booksList: response.data
                      });
  })
});

module.exports = router;
