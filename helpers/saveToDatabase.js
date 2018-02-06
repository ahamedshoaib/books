const models = require('../models');

// const saveToDatabase = allBooks => models.books.bulkCreate(allBooks);

const saveToDatabase = (allBooks) => {
  const promiseStoreDb = new Promise((resolve, reject) => {
    const promises = [];
    for (let bookNo = 0; bookNo < allBooks.length; bookNo += 1) {
      promises.push(models.books.findCreateFind({
        where: allBooks[bookNo],
      }));
    }
    Promise.all(promises).then((values) => {
      resolve({ statusCode: 200, message: 'sucsess' });
    });
  });

  return promiseStoreDb;
};

module.exports = saveToDatabase;
