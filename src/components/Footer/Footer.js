import React from "react"
import styles from "./Footer.module.scss"
import footerLogo from "../../images/a4t2019-logo-white.svg"

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.footerInfo}>
        <div className="container">
          <div>
            <img
              src={footerLogo}
              alt="Art for Tibet"
              style={{ width: "150px" }}
            />
          </div>
          <div>
            <p>
              <strong>ART FOR TIBET</strong> was founded in 2009. All proceeds
              from the auction support Students for a Free Tibet (SFT), a
              501(c)3 global grassroots network that campaigns for Tibetan
              freedom and human rights. ART FOR TIBET raises critical funds that
              enable SFT to carry out its urgent mission. SFT works in
              solidarity with the Tibetan people in their struggle for freedom
              and independence.
            </p>
          </div>
          <div>
            <p>
              <i className="fas fa-map-marked-alt"></i>{" "}
              <strong>STUDENTS FOR A FREE TIBET</strong>
            </p>
            <p>
              602 East 14<sup>th</sup> Street (2<sup>nd</sup> Floor) <br />
              New York, NY 10009 USA
            </p>
            <p>
              <i className="fas fa-phone-square-alt"></i> 212-358-0071
            </p>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className="container" style={{display: 'flex', alignItems: 'center'}}>
          <div style={{flexGrow: 1}}>
          Copyright &copy; {new Date().getFullYear()} Art for Tibet
          </div>

          <div className={styles.smIcons}>
              <a href="https://www.facebook.com/Art-for-Tibet-226189777437828" title="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com/SFTHQ" title="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/artfortibet/" title="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
