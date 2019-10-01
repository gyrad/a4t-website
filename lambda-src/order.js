require("dotenv").config()

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

exports.handler = async function(event) {
  try {
    const parsedBody = JSON.parse(event.body)
    const { order, source } = parsedBody

    const stripeOrder = await stripe.orders.create(order)

    const pay = await stripe.orders.pay(stripeOrder.id, { source })

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Payment completed succesfully!`,
        pay,
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
