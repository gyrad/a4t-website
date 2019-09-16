import React, { useEffect } from "react"

const Countdown = () => {
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
          days + "d " + hours + "h " + minutes + "m " + seconds + "s "

        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x)
        }
      }
    }, 1000)
  }

  return (
    <div id="countdown" style={{ fontSize: "2.5rem", marginTop: 0 }}>
      &nbsp;
    </div>
  )
}

export default Countdown
