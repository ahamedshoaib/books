const models = require('../models');

// const saveToDatabase = allBooks => models.books.bulkCreate(allBooks);

const getAllBooksFromDB = () => models.books.findAll();

module.exports = getAllBooksFromDB;
