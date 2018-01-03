module.exports = {
  API_BASE_URL:
        process.env.REACT_APP_API_BASE_URL=  //insert heroku link here || 
        'http://localhost:8080',
  PORT: process.env.PORT || 8080,
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
//   DATABASE_URL:
//         process.env.DATABASE_URL || 'mongodb://localhost/thinkful-backend',
//   TEST_DATABASE_URL:
//         process.env.TEST_DATABASE_URL ||
//         'mongodb://localhost/thinkful-backend-test'
};
