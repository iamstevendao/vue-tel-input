import getJSON from 'get-json';

const getCountry = function () {
  return new Promise((resolve, reject) => {
    getJSON('https://ipinfo.io/json', (error, response) => {
      if (error) {
        reject(error);
      }
      resolve(response && response.country);
    });
  });
};

export default getCountry;
