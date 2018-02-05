const https = require('https');

const api2 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/';

const getRating = (id) => {
  const promiseRating = new Promise((resolve, reject) => {
    https.get(api2 + id, (response) => {
      response.setEncoding('utf8');
      let rawData = '';
      response.on('data', (chunk) => { rawData += chunk; });
      response.on('end', () => {
        resolve(JSON.parse(rawData));
      });
    });
  });

  return promiseRating;
};

module.exports = getRating;
