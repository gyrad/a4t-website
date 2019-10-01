import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import { Container } from "../components/layoutComponents"
import PurchaseCard from "../components/purchaseCard"
import SEO from "../components/seo"

import a4tVideo from "../videos/a4t-promo.mp4"
import a4tVideoLogo from "../images/a4t2019-squarelogo.svg"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />

      <Container>
        <h1>About</h1>

        <IntroContainer>
          <div>
            <p>
              Art plays a vital role in Tibetan culture, and has long been a
              profound tool for social and political change. Art for Tibet
              brings together artists and activists to celebrate, commemorate,
              and support the Tibetan peoples’ nonviolent freedom struggle
              against occupation. The auction showcases artwork from a diverse
              international pool of established and emerging artists, including
              a growing number of outstanding contemporary Tibetan artists.
            </p>
            <p>
              Founded in 2009, Art for Tibet raises critical funds for Students
              for a Free Tibet (SFT), a grassroots network of youth and
              activists campaigning for Tibetans’ fundamental right to political
              freedom. Through education, grassroots organizing and nonviolent
              direct action SFT empowers youth as leaders in the worldwide
              movement for social justice. Visit{" "}
              <a
                href="https://www.studentsforafreetibet.org"
                rel="noopener noreferrer"
                target="_blank"
              >
                www.studentsforafreetibet.org
              </a>{" "}
              to learn more.
            </p>

            <p>
              We are grateful to our past and present Honorary Committee members
              Shepard Fairey, Professor Robert Thurman, Tenzin Choegyal, Steven
              Cogle, Christian Mendoza, David Carson, Richard Gere, Kumi
              Kalantri, Moby, Bruno Levy, and Arpana Rayamajhi for their ongoing
              support.
            </p>

            <p>
              We would also like to recognize the hard work of our Curatorial
              Committee members for 2018: Jonathan Hulland, Alex Bershaw, Pema
              Yoko, and Tenzin Dorjee.
            </p>
          </div>
          <Container className="video">
            <video controls src={a4tVideo} poster={a4tVideoLogo}>
              Sorry, your browser doesn't support embedded videos.
            </video>
          </Container>
        </IntroContainer>
      </Container>
      <PurchaseCard />
    </Layout>
  )
}

const IntroContainer = styled.div`
  display: block;
  @media (min-width: 600px) {
    display: flex;
  }

  div {
    flex: 5;
  }

  .video {
    flex: 2;
    margin-left: 0;
    @media (min-width: 600px) {
      margin-left: 0;
      flex: 3;
      padding: 1rem;
    }
    @media (min-width: 1000px) {
      margin-left: 1rem;
      flex: 2;
    }

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
`

export default AboutPage
