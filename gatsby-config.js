const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Art for Tibet`,
    siteUrl: `http://artfortibet.org`,
    description: `Art for Tibet brings together artists and activists to celebrate, commemorate, and support the Tibetan peoples’ nonviolent freedom struggle against occupation.`,
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
