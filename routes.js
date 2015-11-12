var express = require('express');
var router = express.Router();
var books = require('./models/books.js');
var getCover = require('./services/book-service.js');
var Promise = require('promise');

/* GET home page. */
router.get('/', function(req, res) {
  books()
  .booksList()
  .then(function (response) {
    var latestBooks = response.data.slice(response.data.length-5, response.data.length);
    console.log(latestBooks);
    res.render('index', { title: 'A Bookshelf app',
                          booksList: latestBooks
                          }
    );
  });
});

/* GET form page. */
router.get('/form', function(req, res) {
  res.render('form', { title: 'Add a new book'
  });
});

/* POST form. */
router.post('/complete', function(req, res) {
  books().addNewBook(req.body)
  .then(function (){
    console.log(req.body);
    res.send('You sent the details for "' + req.body.title + '", by ' + req.body.authorFirst + ' ' + req.body.authorLast + '.');
  });
});

module.exports = router;
