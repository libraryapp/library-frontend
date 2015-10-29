var axios = require('axios');

// https://www.googleapis.com/books/v1/volumes?q=isbn:9780451522900
// http://covers.openlibrary.org/b/isbn/9781491902301-M.jpg?default=false

// get image, if not there try another service

module.exports = function() {
  return {
    getBookCover: function(isbn) {
      var defaultUrl = 'http://covers.openlibrary.org/b/isbn/' + isbn + '-M.jpg';
      var newUrl;
      return axios.get(defaultUrl)
        .then(function (response) {
          newUrl = defaultUrl;
          return newUrl;
        })
        .catch(function (response) {
          newUrl = 'https://placehold.it/250x250?text=isbn+' + isbn;
          return newUrl;
        })

    }
  }
};