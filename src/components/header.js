import React from "react"
import PropTypes from "prop-types"

import styled from "styled-components"
import { Link } from "gatsby"

import { Container } from "./layoutComponents"
import Navigation from "./navigation"

import headerLogo from "../images/header-logo.svg"

const Header = ({ className }) => {
  return (
    <header className={className}>
      <Container novpadding>
        <div>
          <Link to="/">
            <img src={headerLogo} alt="Art for Tibet" id="headerLogo" />
          </Link>
        </div>
        <Navigation />
      </Container>
    </header>
  )
}

const StyledHeader = styled(Header)`
  background-color: white;
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  box-shadow: 0 4px 16px 0px rgba(0, 0, 0, 0.1);
  z-index: 99999;

  ${Container} {
    display: flex;
    align-items: center;
    height: 70px;
    overflow: hidden;
    > div {
      flex-grow: 1;
      img {
        width: 138px;
        height: 140px;
        transform: rotate(-20deg);
      }
    }
  }
`

Header.propTypes = {
  className: PropTypes.string.isRequired,
}

export default StyledHeader
