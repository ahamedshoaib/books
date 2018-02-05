const models = require('../models');

const saveToDatabase = allBooks => models.books.bulkCreate(allBooks);

module.exports = saveToDatabase;
