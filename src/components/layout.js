import React from "react"
import PropTypes from "prop-types"

import { LayoutWrapper, MainContent } from "./layoutComponents"
import Header from "./header"
import EmailSignup from "./emailSignup"
import Footer from "./footer"

import { GlobalStyle } from "../styles/globalStyle"

const Layout = ({ hideFooterEmailSignup, children }) => {
  return (
    <>
      <GlobalStyle />
      <LayoutWrapper>
        <Header />
        <MainContent>{children}</MainContent>
        {hideFooterEmailSignup || <EmailSignup />}
        <Footer />
      </LayoutWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
