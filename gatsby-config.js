const path = require("path")
var proxy = require("http-proxy-middleware")
require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Art for Tibet`,
    siteUrl: `https://artfortibet.org`,
    description: `Art for Tibet brings together artists and activists to celebrate, commemorate, and support the Tibetan peoples’ nonviolent freedom struggle against occupation.`,
  },
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://0.0.0.0:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: process.env.ENDPOINT_URL,
      },
    },
    `gatsby-plugin-stripe`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Art for Tibet`,
        short_name: `Art for Tibet`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#FFF`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}
