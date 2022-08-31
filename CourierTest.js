/*
      1) Install Courier SDK: npm install @trycourier/courier
      2) Make sure you allow ES module imports: Add "type": "module" to package.json file 
      */
      import { CourierClient } from "@trycourier/courier";
      import dotenv from "dotenv";

      dotenv.config()
      
      const AUTH_KEY = process.env.AUTH_KEY
      const TEST_EMAIL = process.env.TEST_EMAIL
      const TEST_PHONE = process.env.TEST_PHONE

      const courier = CourierClient(
        { authorizationToken: AUTH_KEY});

      const { requestId } = await courier.send({
        message: {
          to: {
            phone_number: TEST_PHONE
          },
          content: {
            title: "Welcome to Courier!",
            body: "Want to hear a joke? {{joke}}"
          },
          data: {
            joke: "Why was the JavaScript developer sad? Because they didn't Node how to Express themselves"
          },
        }
      });