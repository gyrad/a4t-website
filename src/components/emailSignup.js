import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"

import addToMailchimp from "gatsby-plugin-mailchimp"
import styled from "styled-components"

import { Section, Container } from "./layoutComponents"

const EmailSignup = ({ className }) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [result, setResult] = useState({})

  const notificationRef = useRef(null)

  const handleSubmit = async (e, email, listFields) => {
    e.preventDefault()
    const res = await addToMailchimp(email, listFields)
    setResult(res)
  }

  useEffect(() => {
    if (
      !(Object.entries(result).length === 0 && result.constructor === Object)
    ) {
      notification(result.result, result.msg)
    }
  }, [result])

  const notification = (status, message) => {
    const alert = notificationRef.current
    alert.classList.add("open")

    if (status === "success") {
      alert.innerHTML = `<i class="fas fa-check-circle"></i> &nbsp;${message}`
    } else {
      alert.innerHTML = `<i class="fas fa-info-circle"></i> &nbsp;${message}`
    }
  }

  return (
    <Section className={className}>
      <Container>
        <h2>
          <i className="fas fa-envelope-open-text"></i> &nbsp;Get email updates
          on this year’s auction for Tibet:
        </h2>
        <div className="notification" ref={notificationRef}>
          <i className="fas fa-info-circle"></i> &nbsp; Hello
        </div>
        <StyledForm
          onSubmit={e =>
            handleSubmit(e, email, { FNAME: firstName, LNAME: lastName })
          }
        >
          <input
            type="text"
            placeholder="First Name *"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name *"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email *"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button>Sign up!</button>
        </StyledForm>
        <p className="privacy-notice">
          <span>&#8258; Art for Tibet respects your privacy.</span> You can
          unsubscribe at any time.
        </p>
      </Container>
    </Section>
  )
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  > * {
    margin-bottom: 0.5rem;
  }

  @media (min-width: 850px) {
    flex-direction: row;
    > input {
      display: block;
      flex: 2;
      margin-right: 1rem;
      &[type="email"] {
        flex: 3;
      }
    }
    button {
      flex: 1;
    }
  }
`

const StyledEmailSignup = styled(EmailSignup)`
  padding-bottom: 1.5rem;
  z-index: 2;

  .privacy-notice {
    color: #aaa;
    font-size: 0.8rem;
    text-align: right;
    text-shadow: 1px 1px 1px rgba(255, 255, 255, 1);

    span {
      display: block;
    }

    @media (min-width: 600px) {
      span {
        display: inline;
      }
    }
  }

  .notification {
    background-color: rgba(242, 154, 193, 0.4);
    color: rgb(219, 98, 150);
    margin-bottom: 0.5rem;
    padding: 0.75rem;
    border-radius: 4px;
    border: 1px solid rgba(219, 98, 150, 0.4);
    display: none;
    &.open {
      display: block;
    }
  }
`

EmailSignup.propTypes = {
  className: PropTypes.string.isRequired,
}

export default StyledEmailSignup
