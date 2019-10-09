require("dotenv").config()

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

exports.handler = async function(event) {
  try {
    const parsedBody = JSON.parse(event.body)
    const { charge } = parsedBody

    const stripeCharge = await stripe.charges.create(charge)

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Payment completed succesfully!`,
        stripeCharge,
      }),
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: err.message,
      }),
    }
  }
}
