var express = require('express');
var router = express.Router();
var books = require('../models/books.js');

/* GET home page. */
router.get('/', function(req, res) {
  books()
  .booksList()
  .then(function (response) {
  console.log(response.data)
  res.render('index', { title: 'A Bookshelf app',
                        booksList: response.data
                      });
  })
});

/* GET form page. */
router.get('/form', function(req, res) {
  res.render('form', { title: 'Add a new book'
  });
});

router.post('/complete', function(req, res) {
  console.log(req.body);
  res.send('You sent the details for "' + req.body.title + '", by ' + req.body.authorFirst + ' ' + req.body.authorLast + '.');
});


module.exports = router;
