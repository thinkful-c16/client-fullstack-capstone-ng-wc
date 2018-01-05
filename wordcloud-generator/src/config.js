'use strict';

module.exports = {
  API_BASE_URL:
        process.env.REACT_APP_API_BASE_URL='http://localhost:8080',
  PORT: process.env.PORT || 8080,
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost:3000',

  // process.env.REACT_APP_API_BASE_URL=  'https://wordcloud-generator.herokuapp.com/'
  // || 'http://localhost:8080',
};
