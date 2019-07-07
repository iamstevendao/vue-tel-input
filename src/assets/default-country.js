const get = require('simple-get');

const getCountry = function () {
  return new Promise((resolve, reject) => {
    get.concat('https://ip2c.org/s', (error, response, data) => {
      // Response: 1;CD;COD;COUNTRY
      if (error) {
        return reject(error);
      }
      const result = (data || '').toString();

      if (!result || result[0] !== '1') {
        return reject(new Error('unable to fetch the country'));
      }

      return resolve(result.substr(2, 2));
    });
  });
};

export default getCountry;
