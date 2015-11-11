var axios = require('axios');

// https://www.googleapis.com/books/v1/volumes?q=isbn:9780451522900
// http://covers.openlibrary.org/b/isbn/9781491902301-M.jpg?default=false

// get image, if not there try another service

module.exports = function() {
  return {
    getBookCover: function(isbn) {
      var defaultUrl = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn;
      var newUrl;
      return axios.get(defaultUrl)
        .then(function (response) {
          newUrl = defaultUrl.volumeInfo.imageLinks.smallThumbnail;
          return newUrl;
        })
        .catch(function (response) {
          console.log(response);
                    newUrl = defaultUrl.volumeInfo.imageLinks.smallThumbnail;

          newUrl = 'https://placehold.it/250x250?text=isbn+' + isbn;
          return newUrl;
        })

    }
  }
};