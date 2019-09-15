import React, { useRef, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import styled from "styled-components"
import anime from "animejs/lib/anime.es"

const Navigation = ({ className }) => {
  const navRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    anime({
      targets: navRef.current.querySelectorAll(`ul li`),
      translateY: ["-20", "0"],
      opacity: [0, 1],
      delay: (el, i) => 100 * i,
    })
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
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
  }, [isMenuOpen])

  return (
    <nav className={className} ref={navRef}>
      <input
        type="checkbox"
        id="menu-toggle"
        checked={isMenuOpen}
        onChange={() => setIsMenuOpen(!isMenuOpen)}
      />
      <label htmlFor="menu-toggle">
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </label>
      <ul>
        <li>
          <Link to="/" activeClassName="active-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/artists/" activeClassName="active-link">
            Artists
          </Link>
        </li>
        <li>
          <Link to="/about/" activeClassName="active-link">
            About
          </Link>
        </li>
        <div className="sm-icons">
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
          <a href="https://www.instagram.com/artfortibet/" title="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </ul>
    </nav>
  )
}

const StyledNavigation = styled(Navigation)`
  /* Mobile Navigation */
  input {
    position: relative;
    display: none;
    z-index: 2;

    @media (max-width: 600px) {
      ~ ul {
        display: block;
        touch-action: none;
        list-style: none;
        position: fixed;
        top: 0;
        right: -350px;
        height: 100vh;
        width: 350px;
        background-color: rgba(65, 65, 65, 0.96);
        padding: 5rem 1.5rem 1.5rem;
        margin: 0;
        z-index: 1;

        li a {
          color: #aaa;
          text-decoration: none;
          font-size: 2.5rem;
          position: relative;
          left: 0;
          transition: left 0.5s ease;
        }
      }

      ~ label div {
        cursor: pointer;
        padding: 1rem 0;
        position: relative;
        z-index: 3;

        /* Hamburger menu */
        span {
          display: block;
          width: 32px;
          height: 4px;
          background-color: #333;
          border-radius: 3px;
          transition: background-color 0.5s, transform 0.5s, opacity 0.5s;

          &:first-child {
            transform: translateY(-6px);
          }
          &:nth-child(2) {
            transform: translateX(0);
            opacity: 1;
          }
          &:last-child {
            transform: translateY(6px);
          }
        }
      }
      &:checked ~ label div span {
        background-color: white;
        opacity: 0;

        &:first-child {
          transform: translateY(4px) rotate(45deg);
          opacity: 1;
        }
        &:nth-child(2) {
          transform: translateX(10px);
          opacity: 0;
        }
        &:last-child {
          transform: translateY(-4px) rotate(-45deg);
          opacity: 1;
        }
      }
    }
  }

  /* Tablet & Desktop Navigation */
  @media (min-width: 600px) {
    input {
      display: none;
    }

    ul {
      display: block;
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        display: inline-block;

        a {
          padding: 0.5rem 1rem;
          color: #999;
          text-decoration: none;
          transition: color 0.3s;
          &:hover,
          &:active {
            color: #444;
          }
        }
      }
    }
  }

  /* Social media icons are visible only on mobile */
  .sm-icons {
    @media (min-width: 600px) {
      display: none;
    }

    a {
      color: #ccc;
      font-size: 1.5rem;
      &:hover {
        color: white;
      }

      i {
        margin-right: 1rem;
      }
    }
    hr {
      width: 220px;
      border: 0;
      border-top: 1px solid #666;
      margin-left: -10px;
      margin-right: auto;
    }
  }

  .active-link {
    color: white;
    @media (min-width: 600px) {
      color: #333;
    }
  }
`

Navigation.propTypes = {
  className: PropTypes.string.isRequired,
}

export default StyledNavigation
