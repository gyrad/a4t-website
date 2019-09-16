import React, { useEffect } from "react"
import anime from "animejs/lib/anime.es"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Countdown from "../components/countdown"

import hhdl from "../images/hhdl.jpg"

export default () => {
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
      <SEO />
      <Hero />

      <div
        style={{
          background: "rgb(34,193,195)",
          backgroundImage:
            "linear-gradient(315deg, rgba(34,193,195,1) 0%, rgba(176,109,198,1) 100%)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textShadow: "2px 2px 7px rgba(0,0,0,.4)",
            height: "200px",
          }}
        >
          <p style={{ fontSize: "1.2rem" }}>
            Online Bidding Starts{" "}
            <span style={{ fontWeight: "bold", color: "#e5d438" }}>
              November 1
            </span>
          </p>
          <Countdown />
        </div>
      </div>

      <div className="container">
        <p
          style={{
            fontWeight: "bold",
            textAlign: "center",
            color: "#333",
            lineHeight: 1.4,
          }}
          id="hhdl-quote"
        >
          “The achievements of Students for a Free Tibet show that nonviolent
          action does work.”
        </p>
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
      </div>
    </Layout>
  )
}
