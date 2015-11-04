var assert = require('chai').assert;
var nock = require('nock');
var request = require('supertest');
var bookService = require('../../services/book-service.js');

describe('The book cover function', function () {

  it('should return a status of 200 and url when the cover image is found', function () {
    //given
    var isbn = 9780596004651;

    nock('http://covers.openlibrary.org')
    .get('/b/isbn/' + isbn + '-M.jpg?default=false')
    .reply(200, 'http://covers.openlibrary.org/b/isbn/' + isbn + '-M.jpg?default=false')

    //when
    bookService().getBookCover(isbn)
    .then(function (response) {
          assert.equal(response.status, 404);
          assert.equal(response.url, 'http://covers.openlibrary.org/b/isbn/' + isbn + '-M.jpg?default=false');
    })

  });

  it('should display a default cover image if cover is not found on openlibrary.org', function () {
    //given
    var isbn = 123;

    nock('http://covers.openlibrary.org')
        .get('/b/isbn/' + isbn + '-M.jpg?default=false')
        .reply(404, 'not found')

    //when
    bookService().getBookCover(isbn)
    .then(function (response) {
      assert.equal(response.status, 404);
      assert.equal(response.url, 'https://placehold.it/250x250?text=isbn+' + isbn)
    });
  });

});