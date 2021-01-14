const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// eslint-disable-next-line
const stripe = require("stripe")(
    // eslint-disable-next-line
    "sk_test_51I8kMrEyutNcTOo4DFInMHJupAcOQY6R4dhF2fMSj3IpZtE82uGLzyolvd7zwi28HoA5AQcd4Dsm6qwxoEHz7s5H00b4VLFZdi",
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved !!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-d7b25/us-central1/api
