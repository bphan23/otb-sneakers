/* eslint-disable no-unused-vars */
require("dotenv").config();

const express = require("express");
const app = express();
// Need when utilizing two different urls - one for client - one for server
const cors = require("cors");

app.use(express.json());

/*
IMPORTANT:
  - for local development - use process.env.LOCAL_CLIENT_URL
  - for live deployment - use process.env.LIVE_CLIENT_URL
*/
app.use(
  cors({
    origin: process.env.LIVE_CLIENT_URL,
  })
);

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: `${item.name} - Size ${item.size}`,
            },
            unit_amount: item.price * 100,
          },
          quantity: 1,
        };
      }),
      success_url: `${process.env.LIVE_CLIENT_URL}/checkout-success`,
      cancel_url: `${process.env.LIVE_CLIENT_URL}/checkout`,
    });
    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server Started at Port ${PORT}`);
});
