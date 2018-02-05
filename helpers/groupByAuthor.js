const groupByAuthor = books => books.reduce((accumulator, currentValue) => {
  (accumulator[currentValue.Author] = accumulator[currentValue.Author] || []).push(currentValue);
  return accumulator;
}, {});

module.exports = groupByAuthor;
