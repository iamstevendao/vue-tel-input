const getJSON = require('get-json');

//const result = { data: '' };
// getJSON('https://ipinfo.io/json', (error, response) => {
//   if (error) {
//     return;
//   }
//   result.data = response.country.toLowerCase();
// });
const getCountry = function () {
  return new Promise((resolve, reject) => {
    getJSON('https://ipinfo.io/json', (error, response) => {
      if (error) {
        reject(error);
      }
      resolve(response.country);
    });
  });
};

export default getCountry;
