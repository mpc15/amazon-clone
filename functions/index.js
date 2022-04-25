const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// eslint-disable-next-line max-len
const stripe = require("stripe")(
  "sk_test_51KmSYcACsikcmUV9LirL7IcMhfmYR6P2x02KQ8DAqnRRjGzh6dcpX9iYGAbfHinrWnFRkhtr0soDLYp5gy3PXjGz00U4bPFqna" // eslint-disable-line
);

// API

// App config
const app = express();

// Middleware
// eslint-disable-next-line object-curly-spacing
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-71a06/us-central1/api
