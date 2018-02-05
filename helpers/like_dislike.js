const models = require('../models');

const likeBook = bookId => models.books.update(
  { like: 'like' },
  { where: { id: bookId } },
);

const dislikeBook = bookId => models.books.update(
  { like: 'dislike' },
  { where: { id: bookId } },
);

module.exports = { likeBook, dislikeBook };
