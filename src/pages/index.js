import React, { useEffect } from "react"
import anime from "animejs/lib/anime.es"
import styled from "styled-components"

import Layout from "../components/layout"
import { Section, Container } from "../components/layoutComponents"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Countdown from "../components/countdown"

import hhdl from "../images/hhdl.jpg"

const IndexPage = () => {
  useEffect(() => {
    anime({
      targets: "#countdown",
      translateY: [-30, 0],
      opacity: [0, 1],
      delay: 1000,
    })
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <Hero />

      <CountdownSection>
        <CountdownContainer>
          <p style={{ fontSize: "1.2rem" }}>
            Online Bidding Starts{" "}
            <span style={{ fontWeight: "bold", color: "#e5d438" }}>
              November 1
            </span>
          </p>
          <Countdown />
        </CountdownContainer>
      </CountdownSection>

      <Container vpadding="3">
        <HHDLQuote>
          “The achievements of Students for a Free Tibet show that nonviolent
          action does work.”
        </HHDLQuote>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: ".5rem 0",
          }}
        >
          <img
            src={hhdl}
            alt="His Holiness the Dalai Lama"
            style={{
              width: 70,
              height: 70,
              borderRadius: "50%",
            }}
          />
        </div>
        <p style={{ fontSize: ".9rem", textAlign: "center", color: "#888" }}>
          &mdash; His Holiness the 14<sup>th</sup> Dalai Lama
        </p>
      </Container>
    </Layout>
  )
}

const CountdownSection = styled(Section)`
  background: rgb(34, 193, 195);
  background-image: linear-gradient(
    315deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(176, 109, 198, 1) 100%
  );
`

const CountdownContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 0px 0px 22px rgba(0, 0, 0, 0.4);
  height: 200px;
`

const HHDLQuote = styled.p`
  font-weight: bold;
  text-align: center;
  color: #333;
  line-height: 1.4;
  font-size: 1.4rem;
  @media (min-width: 600px) {
    font-size: 2.2rem;
  }
`

export default IndexPage
