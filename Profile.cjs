// Dependencies to install:
// $ npm install node-fetch --save

const fetch = require('node-fetch');
const dotenv = require('dotenv');

dotenv.config()

const AUTH_KEY = process.env.AUTH_KEY

const options = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + AUTH_KEY
  },
  body: JSON.stringify({
    "profile": {
      "email": "user@example.com",
      "phone_number": "555-555-5555"
    }
  })
};

//Recipient id at the end of the url (FGT-Date+Time+Random Digts)
fetch('https://api.courier.com/profiles/0460766e-8463-4905-ae98-b72c7aef41d6', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));