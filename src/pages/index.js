import React, { useEffect } from "react"
import PropTypes from "prop-types"
import anime from "animejs/lib/anime.es"
import styled from "styled-components"

import Countdown from "../components/countdown"
import EmailSignup from "../components/emailSignup"
import Hero from "../components/hero"
import Layout from "../components/layout"
import { Section, Container } from "../components/layoutComponents"
import PurchaseCard from "../components/purchaseCard"
import SEO from "../components/seo"

import shepardFairey from "../images/shepard_fairey.jpg"
import monksArt from "../images/monks-art.jpeg"
import promo1 from "../images/a4t2019-promo-1.jpg"
import promo2 from "../images/a4t2019-promo-2.jpg"
import promo3 from "../images/a4t2019-promo-3.jpg"
import bidNowBanner from "../images/bidnowbanner.svg"

const IndexPage = ({ path }) => {
  useEffect(() => {
    anime({
      targets: "#countdown",
      translateY: [-30, 0],
      opacity: [0, 1],
      delay: 1000,
    })
  }, [])

  // The following is code for Stripe Checkout

  // let stripe
  // useEffect(() => {
  //   stripe = window.Stripe("pk_test_VM3CFtcuFgaY3PlZj3bUn4Rf")
  // }, [])

  // const checkoutHandler = async () => {
  //   // When the customer clicks on the button, redirect
  //   // them to Checkout.
  //   const { error } = await stripe.redirectToCheckout({
  //     items: [{ sku: "sku_FrkHOyh8PGIzQg", quantity: 1 }],

  //     // Do not rely on the redirect to the successUrl for fulfilling
  //     // purchases, customers may not always reach the success_url after
  //     // a successful payment.
  //     successUrl: "https://www.artfortibet.org",
  //     cancelUrl: "http://0.0.0.0:8000",
  //   })

  //   console.warn(error)
  // }

  return (
    <Layout hideFooterEmailSignup={path === "/"}>
      <SEO title="Home" />
      <Hero />

      <EmailSignup />

      <Container>
        <a
          href="https://benefitevents.com/auctions/sft2019/catalog.asp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={bidNowBanner} alt="Art for Tibet: Bid now!" />
        </a>
      </Container>

      <IntroTextContainer>
        <div className="image-wrapper">
          <img src={monksArt} alt="Monks at a past Art for Tibet event." />
        </div>
        <div>
          <svg
            width="290"
            height="251"
            viewBox="0 0 290 251"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M220.692 131.433L290 251H151.384L220.692 131.433Z"
              fill="#F299C1"
            />
            <path d="M145 0L213.852 120.024H75.6918L145 0Z" fill="#FDF49B" />
            <path
              d="M69.3082 131.433L138.16 251H0L69.3082 131.433Z"
              fill="#6ECEF5"
            />
          </svg>
          {/* <h1>Art for Tibet 2019</h1> */}
          <p>
            This year Art for Tibet are thrilled to announce that legendary NYC
            hip-hop artist & Beastie Boys collaborator{" "}
            <strong>Cey Adams</strong> and French-Tibetan painter{" "}
            <strong>Marie-Dolma Chophel</strong> have joined this year’s
            Honorary Committee alongside returning members{" "}
            <strong>Shepard Fairey</strong> and Columbia Professor of
            Indo-Tibetan Studies, <strong>Robert Thurman</strong>.
          </p>
          <p>
            For the first time, an exhibition will run in tandem with the
            auction at the prestigious <strong>Gallery 8</strong> in Harlem,
            giving a chance for extraordinary Tibetan artists to be showcased
            alongside leading contemporary artists for an extended period of
            time. An online auction will also run from{" "}
            <strong>October 25 – November 7 2019</strong>. The live auction will
            take place on <strong>Thursday November 7</strong> and will be
            accompanied by a drinks reception and a performance from Tibetan
            musician and composer <strong>Tenzin Choegyal</strong>.
          </p>
          <p>
            American contemporary street artist, graphic designer, activist, and
            illustrator Shepard Fairey says:{" "}
            <em>
              “I've been a longtime supporter of Students for a Free Tibet
              because of the work they do to help the Tibetan people gain
              political independence and freedom. I believe in the power of
              nonviolent, grassroots movements to create change, and I will
              continue to advocate for the human rights of Tibetans through my
              voice and through my art. Free Tibet!"
            </em>
          </p>
        </div>
      </IntroTextContainer>

      <PromoWrapper>
        <div>
          <img src={promo1} alt="1" />
        </div>
        <div>
          <img src={promo2} alt="2" />
        </div>
        <div>
          <img src={promo3} alt="3" />
        </div>
      </PromoWrapper>

      <CountdownSection>
        <CountdownContainer>
          <p style={{ fontSize: "1.2rem" }}>
            Online Bidding Starts{" "}
            <span style={{ fontWeight: "bold", color: "#e5d438" }}>
              October 25
            </span>
          </p>
          <Countdown />
        </CountdownContainer>
      </CountdownSection>

      <PurchaseCard />

      <Container vpadding="3">
        <Quote>
          “I’ve been a longtime supporter of Students for a Free Tibet because
          of the work they do to help the Tibetan people gain political
          independence and freedom. I believe in the power of nonviolent,
          grassroots movements to create change, and I will continue to advocate
          for the human rights of Tibetans through my voice and through my art.
          Free Tibet!”
        </Quote>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: ".5rem 0",
          }}
        >
          <img
            src={shepardFairey}
            alt="Shepard Fairey"
            style={{
              width: 70,
              height: 70,
              borderRadius: "50%",
            }}
          />
        </div>
        <p style={{ fontSize: ".9rem", textAlign: "center", color: "#888" }}>
          &mdash; Shepard Fairey
        </p>
      </Container>
    </Layout>
  )
}

const PromoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    flex-direction: row;
  }
  justify-content: space-evenly;
  margin: 2.5rem 0;
  align-items: center;

  div {
    width: 90%;
    margin-bottom: 1rem;
    @media (min-width: 600px) {
      width: 30%;
    }
    img {
      box-shadow: 0 5px 18px rgba(0, 0, 0, 0.2);
      transition: box-shadow 0.4s, transform 0.4s;

      :hover {
        box-shadow: 0 10px 22px rgba(0, 0, 0, 0.25);
        transform: translateY(-2px);
      }
    }
  }
`

const IntroTextContainer = styled(Container)`
  display: block;
  margin-bottom: 1.5rem;
  @media (min-width: 600px) {
    display: flex;
  }
  div {
    flex: 3;
    position: relative;
    svg {
      position: absolute;
      right: 0;
      top: 0;
      z-index: -1;
      width: 180px;
      opacity: 0.5;
      height: auto;
      filter: blur(7px);
    }
  }
  .image-wrapper {
    flex: 1;
    padding: 0;
    margin-right: 0;
    @media (min-width: 600px) {
      padding: 1rem;
    }
    @media (min-width: 1000px) {
      margin-right: 1rem;
    }
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      box-shadow: 0 5px 18px rgba(0, 0, 0, 0.4);
    }
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

const Quote = styled.p`
  font-weight: bold;
  text-align: center;
  color: #333;
  line-height: 1.4;
  font-size: 1.2rem;
  @media (min-width: 600px) {
    font-size: 1.8rem;
  }
`

IndexPage.propTypes = {
  path: PropTypes.string.isRequired,
}

export default IndexPage
