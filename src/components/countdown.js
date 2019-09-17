import React, { useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Countdown = ({ className }) => {
  useEffect(() => {
    countdownTimer(new Date("Nov 1, 2019 00:00:00").getTime())
  }, [])

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
          days +
          "<span class='countdown-dhms'>days</span> " +
          hours +
          "<span class='countdown-dhms'>hrs</span> " +
          minutes +
          "<span class='countdown-dhms'>mins</span> " +
          seconds +
          "<span class='countdown-dhms'>secs</span> "

        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x)
        }
      }
    }, 1000)
  }

  return (
    <div id="countdown" className={className}>
      &nbsp;
    </div>
  )
}

const StyledCountdown = styled(Countdown)`
  font-size: 2.5rem;
  @media (min-width: 600px) {
    font-size: 3rem;
  }
  margin-top: 0;
  font-weight: bold;
  .countdown-dhms {
    display: inline-block;
    font-size: 0.8rem;
    @media (min-width: 600px) {
      font-size: 1.2rem;
    }
    margin-left: 0.3rem;
    font-weight: lighter;
  }
`

Countdown.propTypes = {
  className: PropTypes.string.isRequired,
}

export default StyledCountdown
