import React, { useEffect } from "react"
import PropTypes from "prop-types"
import anime from "animejs/lib/anime.es"
import styled from "styled-components"

import Countdown from "../components/countdown"
import EmailSignup from "../components/emailSignup"
import Hero from "../components/hero"
import Layout from "../components/layout"
import { Section, Container } from "../components/layoutComponents"
import SEO from "../components/seo"

import hhdl from "../images/hhdl.jpg"
import a4tVideoLogo from "../images/a4t2019-squarelogo.svg"
import a4tVideo from "../videos/a4t-promo.mp4"

const IndexPage = ({ path }) => {
  useEffect(() => {
    anime({
      targets: "#countdown",
      translateY: [-30, 0],
      opacity: [0, 1],
      delay: 1000,
    })
  }, [])

  return (
    <Layout hideFooterEmailSignup={path === "/"}>
      <SEO title="Home" />
      <Hero />

      <EmailSignup />

      <VideoContainer>
        <Container className="video">
          <video controls src={a4tVideo} poster={a4tVideoLogo}>
            Sorry, your browser doesn't support embedded videos.
          </video>
        </Container>
        <Container>
          <h1>Art for Tibet 2019</h1>
          <p>
            We are thrilled to announce that legendary NYC hip-hop artist &
            Beastie Boys collaborator <strong>Cey Adams</strong> and
            French-Tibetan painter <strong>Marie-Dolma Chophel</strong> have
            joined this year’s Honorary Committee alongside returning members{" "}
            <strong>Shepard Fairey</strong> and Columbia Professor of
            Indo-Tibetan Studies <strong>Robert Thurman</strong>.
          </p>

          <p>
            Together with the Honorary Committee, we the Organizing Committee
            invites you to celebrate resistance, freedom and art with us as a
            contributing artist to this year’s Art for Tibet. Art for Tibet is
            Students for a Free Tibet’s (SFT) most important annual fundraiser,
            which enables SFT to continue its fight for the Tibetan people’s
            fundamental human rights and freedom.
          </p>
        </Container>
      </VideoContainer>

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

const VideoContainer = styled(Container)`
  display: block;
  @media (min-width: 600px) {
    display: flex;
  }
  .video {
    flex: 1;
    video {
      width: 100%;
      outline: 0;
      object-fit: cover;
      border-radius: 8px;
      display: inline-block;
      background: #fff;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
      transition: border-color 0.4s, box-shadow 0.4s;
    }
  }
  div {
    flex: 2;
  }
`

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
  height: 150px;
  @media (min-width: 600px) {
    height: 180px;
  }
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

IndexPage.propTypes = {
  path: PropTypes.string.isRequired,
}

export default IndexPage
