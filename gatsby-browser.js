import React from "react"
import { StripeProvider } from "react-stripe-elements"

export const wrapRootElement = ({ element }) => (
  <StripeProvider apiKey="pk_test_VM3CFtcuFgaY3PlZj3bUn4Rf">
    {element}
  </StripeProvider>
)
