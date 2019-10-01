import React from "react"
import { StripeProvider } from "react-stripe-elements"

export const wrapRootElement = ({ element }) => {
  return (
    <StripeProvider apiKey={process.env.GATSBY_STRIPE_PUBLIC_KEY}>
      {element}
    </StripeProvider>
  )
}
