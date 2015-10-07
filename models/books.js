var axios = require('axios');
//var booksList = function(){


module.exports = function () {
  return {
    booksList: function () {
      return axios.get('http://localhost:8080/books/')
    }
  }
}
