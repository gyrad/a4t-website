import React, { useEffect } from "react"
import Layout from "../components/Layout/Layout"
import anime from "animejs/lib/anime.es"

import heroBg from "../images/a4t2019-bgart.jpg"
import hhdl from "../images/hhdl.jpg"
import heroOverlay from "../images/a4t2019-herooverlay.svg"
import heroOverlayMobile from "../images/a4t2019-mobile-herooverlay.svg"

export default props => {
  function countdownTimer(countdownDate, kill) {
    // Update the count down every 1 second
    var x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime()

      // Find the distance between now and the count down date
      var distance = countdownDate - now

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24))
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      var seconds = Math.floor((distance % (1000 * 60)) / 1000)

      let countdown = document.getElementById("countdown")
      if (countdown) {
        countdown.innerHTML =
          days + "d " + hours + "h " + minutes + "m " + seconds + "s "

        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x)
        }
      }
    }, 1000)
  }

  useEffect(() => {
    countdownTimer(new Date("Nov 1, 2019 00:00:00").getTime())
    anime({
      targets: "#countdown",
      translateY: [-30, 0],
      opacity: [0, 1],
      delay: 1000,
    })
  }, [])

  return (
    <Layout>
      <div
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundColor: `#7B5D24`,
          backgroundSize: `cover`,
          position: `relative`,
        }}
        id="hero-wrapper"
      >
        <picture>
          <source media="(min-width: 600px)" srcSet={heroOverlay} />
          <source media="(max-width: 600px)" srcSet={heroOverlayMobile} />
          <img
            src={heroOverlay}
            alt="Art for Tibet"
            style={{
              display: `block`,
              position: `relative`,
              zIndex: 1,
            }}
          />
        </picture>
        <div
          style={{
            position: `absolute`,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: `rgba(0,0,0,.2)`,
          }}
        ></div>
      </div>

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
          <p id="countdown" style={{ fontSize: "2.5rem", marginTop: 0 }}>
            &nbsp;
          </p>
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
