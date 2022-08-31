// Install with: npm install @trycourier/courier
import { CourierClient } from "@trycourier/courier";
import dotenv from "dotenv";

dotenv.config()

const AUTH_KEY = process.env.AUTH_KEY
const TEST_EMAIL = process.env.TEST_EMAIL
const TEST_PHONE = process.env.TEST_PHONE


const courier = CourierClient({ authorizationToken: AUTH_KEY });

const { requestId } = await courier.send({
  message: {
    to: {
      email: TEST_EMAIL,
      phone_number: TEST_PHONE
    },
    template: "SET3Q2V4WNMNPNG9C5FQ2P7GT3K8",
    data: {
      recipientName: "Cole",
			steamGames: [
        {
          "name": "Quiplash",
          "link": "https://store.steampowered.com/"
        },
        {
          "name": "Red Dead Redemption 2",
          "link": "https://store.steampowered.com/"
        }
      ],
			epicGames: [
        {
          "name": "Alan Wake",
          "link": "https://store.epicgames.com/en-US/"
        },
        {
          "name": "Spiderman",
          "link": "https://store.epicgames.com/en-US/"
        }
      ],
			cancelLink: "Cancel Link Placeholder"
    },
  },
});