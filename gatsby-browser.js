import React from "react"
import { StripeProvider } from "react-stripe-elements"

export const wrapRootElement = ({ element }) => (
  <StripeProvider apiKey="pk_live_407So8bPh2e8ZqEbKJyRO5oJ">
    {element}
  </StripeProvider>
)
