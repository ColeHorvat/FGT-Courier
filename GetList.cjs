// Dependencies to install:
// $ npm install node-fetch --save

const fetch = require('node-fetch');
const dotenv = require('dotenv');

dotenv.config()

const AUTH_KEY = process.env.AUTH_KEY
const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer ' + AUTH_KEY
  },
};

fetch('https://api.courier.com/lists/fgt.list.id', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));