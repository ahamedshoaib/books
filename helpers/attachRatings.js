const getRating = require('../helpers/getRating');

const attachRating = (allBooks) => {
  const allBooksWithRatings = allBooks;
  const promiseBooksWithRating = new Promise((resolve, reject) => {
    const promises = [];
    for (let bookNo = 0; bookNo < allBooks.length; bookNo += 1) {
      promises.push(getRating(allBooks[bookNo].id));
    }
    Promise.all(promises).then((values) => {
      for (let bookNo = 0; bookNo < allBooks.length; bookNo += 1) {
        allBooksWithRatings[bookNo].rating = values[bookNo].rating;
      }
      resolve(allBooksWithRatings);
    });
  });

  return promiseBooksWithRating;
};

module.exports = attachRating;
