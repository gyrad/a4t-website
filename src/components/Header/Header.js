import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import anime from "animejs/lib/anime.es"

import headerLogo from "../../images/header-logo.svg"
import styles from "./Header.module.scss"

const Header = () => {
  const headerRef = useRef(null)

  useEffect(() => {
    anime({
      targets: headerRef.current.querySelectorAll(`nav li`),
      translateY: ["-20", "0"],
      opacity: [0, 1],
      delay: (el, i) => 100 * i,
    })

    let menuToggle = document.querySelector("#menuToggle")
    let breakpoint = window.matchMedia("(max-width: 600px)")
    menuToggle.addEventListener("change", () => {
      if (breakpoint.matches) {
        if (menuToggle.checked) {
          anime({
            targets: "nav ul",
            translateX: "-250px",
          })
        } else {
          anime({
            targets: "nav ul",
            translateX: "0",
          })
        }
      }
    })
  }, [])

  return (
    <header className={styles.Header} ref={headerRef}>
      <div className="container container--novpadding pos-rel">
        <div>
          <Link to="/">
            <img src={headerLogo} alt="Art for Tibet" id="headerLogo" />
          </Link>
        </div>
        <nav>
          <input type="checkbox" id="menuToggle" />
          <label htmlFor="menuToggle">
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </label>
          <ul>
            <li>
              <Link to="/" activeClassName={styles.activeLink}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/artists" activeClassName={styles.activeLink}>
                Artists
              </Link>
            </li>
            <li>
              <Link to="/about" activeClassName={styles.activeLink}>
                About
              </Link>
            </li>
            <div className={styles.smIcons}>
              <hr />
              <a
                href="https://www.facebook.com/Art-for-Tibet-226189777437828"
                title="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/SFTHQ" title="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/artfortibet/"
                title="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
