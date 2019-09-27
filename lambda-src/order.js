const dotenv = require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

exports.handler = async function(event) {
  try {
    const parsedBody = JSON.parse(event.body)
    const {
      fullName,
      email,
      address,
      city,
      stateProvince,
      country,
      postalCode,
      skuId,
      tokenId,
      quantity,
    } = parsedBody

    const order = await stripe.orders.create({
      currency: "usd",
      items: [
        {
          type: "sku",
          parent: skuId,
          quantity: quantity,
        },
      ],
      shipping: {
        name: fullName,
        address: {
          line1: address,
          city: city,
          state: stateProvince,
          country: country,
          postal_code: postalCode,
        },
      },
      email: email,
    })

    const pay = await stripe.orders.pay(order.id, {
      source: tokenId,
    })

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
