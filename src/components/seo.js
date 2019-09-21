import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `)
  return (
    <Helmet title={title} titleTemplate={`%s | ${site.siteMetadata.title}`}>
      <html lang="en" />
      <meta name="description" content={site.siteMetadata.description} />
    </Helmet>
  )
}

export default SEO
