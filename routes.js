var express = require('express');
var router = express.Router();
var books = require('./models/books.js');
var getCover = require('./services/book-service.js');

/* GET home page. */
router.get('/', function(req, res) {
  books()
  .booksList()
  .then(function (response) {

  response.data.forEach(function(bookEntry) {
    getCover().getBookCover(bookEntry.isbn)
    .then(function (coverResponse) {
      bookEntry.coverUrl = coverResponse;
      console.log(bookEntry);
    })
  });
    console.log(response.data);
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

// POST the form
//router.post('/form',function(request,response){
////    var query1=request.body.var1;
////    var query2=request.body.var2;
//    res.json(req.body); // handle the user form data
//    console.log(req.body);
//});

router.post('/complete', function(req, res) {
  console.log(req.body);
  res.send('You sent the details for "' + req.body.title + '", by ' + req.body.author + '.');
});``

module.exports = router;
