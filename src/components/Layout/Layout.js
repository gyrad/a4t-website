import React from "react"

import Head from "../Head/Head"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

import "normalize.css"
import "../../styles/global.scss"
import styles from "./Layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Head />
      <Header />
      <div className={styles.mainContent}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
