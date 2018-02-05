const https = require('https');

const api1 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';

const getAllBooks = () => {
  const promiseAllBooks = new Promise((resolve, reject) => {
    https.get(api1, (response) => {
      response.setEncoding('utf8');
      let rawData = '';
      response.on('data', (chunk) => { rawData += chunk; });
      response.on('end', () => {
        resolve(JSON.parse(rawData).books);
      });
    });
  });

  return promiseAllBooks;
};

module.exports = getAllBooks;
