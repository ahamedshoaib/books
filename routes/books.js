const getAllBooks = require('../helpers/getAllBooks');
const attachRating = require('../helpers/attachRatings');
const groupByAuthor = require('../helpers/groupByAuthor');
const saveToDatabase = require('../helpers/saveToDatabase');
const getAllBooksFromDB = require('../helpers/getAllBooksFromDB');
const { likeBook, dislikeBook } = require('../helpers/like_dislike');


const getAllBooksHandler = (request, response) => {
  getAllBooks().then(attachRating).then(groupByAuthor).then(response);
};

const saveAllBooksHandler = (request, response) => {
  getAllBooks().then(attachRating).then(saveToDatabase).then(response);
};

const likeHandler = (request, response) => {
  likeBook(request.params.id).then(response);
};

const dislikeHandler = (request, response) => {
  dislikeBook(request.params.id).then(response);
};

const getAllBooksFromDBHandler = (request, response) => {
  getAllBooksFromDB().then(groupByAuthor).then(response);
};

module.exports = [{
  method: 'GET',
  path: '/books',
  handler: getAllBooksHandler,
}, {
  method: 'GET',
  path: '/books/save',
  handler: saveAllBooksHandler,
}, {
  method: 'PATCH',
  path: '/books/{id}/like',
  handler: likeHandler,
}, {
  method: 'PATCH',
  path: '/books/{id}/dislike',
  handler: dislikeHandler,
}, {
  method: 'GET',
  path: '/books/db',
  handler: getAllBooksFromDBHandler,
}];
