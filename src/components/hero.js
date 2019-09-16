import React from "react"
import PropTypes from "prop-types"

import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

import heroOverlay from "../images/a4t2019-herooverlay.svg"
import heroOverlayMobile from "../images/a4t2019-mobile-herooverlay.svg"

const Hero = ({ className }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "a4t2019-bgart.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      Tag={`div`}
      fluid={data.file.childImageSharp.fluid}
      className={className}
    >
      <picture>
        <source media="(min-width: 600px)" srcSet={heroOverlay} />
        <source media="(max-width: 600px)" srcSet={heroOverlayMobile} />
        <img src={heroOverlay} alt="Art for Tibet" />
      </picture>
      <TransparentBlackOverlay />
    </BackgroundImage>
  )
}

const TransparentBlackOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
`

const StyledHero = styled(Hero)`
  padding: 0.75rem;
  padding-top: 61.98347%;
  @media (min-width: 600px) {
    padding: 1rem;
    padding-top: 38%;
  }
  background-color: #7b5d24;
  position: relative;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.3);
  img {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    width: calc(100% - 1.5rem);
    @media (min-width: 600px) {
      top: 1rem;
      left: 1rem;
      width: calc(100% - 2rem);
    }
    z-index: 1;
  }
`

Hero.propTypes = {
  className: PropTypes.string.isRequired,
}

export default StyledHero
