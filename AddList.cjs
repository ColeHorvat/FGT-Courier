// Dependencies to install:
// $ npm install node-fetch --save

const fetch = require('node-fetch');
const dotenv = require('dotenv');

dotenv.config()

const AUTH_KEY = process.env.AUTH_KEY
const options = {
  method: 'PUT',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + AUTH_KEY
  },
  body: JSON.stringify({
    "preferences": {
      "notifications": {
        "SET3Q2V4WNMNPNG9C5FQ2P7GT3K8": {
          "status": "OPTED_IN"
        }
      },
      "categories": {
        "Email": {
          "status": "OPTED_IN"
        }
      }
    }
  })
};

fetch('https://api.courier.com/lists/fgt.list.id/subscriptions/test_user4', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));