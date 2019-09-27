import React, { useState, useEffect } from "react"
import axios from "axios"
import Modal from "react-modal"
import { injectStripe, CardElement } from "react-stripe-elements"
import styled from "styled-components"

Modal.setAppElement("#___gatsby")

const PurchaseModal = ({ className, isOpen, closeModal, stripe }) => {
  const contentClassName = `${className}__content`
  const overlayClassName = `${className}__overlay`

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [stateProvince, setStateProvince] = useState("")
  const [country, setCountry] = useState("")

  const [quantity, setQuantity] = useState(1)
  const [total, setTotal] = useState(20)

  const [paymentComplete, setPaymentComplete] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)

  useEffect(() => {
    setTotal(quantity * 20)
  }, [quantity])

  const resetSuccessAndCloseModal = () => {
    if (paymentComplete) setTimeout(() => setPaymentComplete(false), 1000)
    closeModal()
  }

  const submitHandler = async e => {
    try {
      e.preventDefault()
      setIsConnecting(true)
      const { token } = await stripe.createToken({ name: fullName })
      const response = await axios({
        method: "POST",
        url: "/.netlify/functions/order",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          fullName,
          email,
          address,
          city,
          stateProvince,
          country,
          quantity,
          postalCode: token.card.address_zip,
          skuId: "sku_FrjVCqLfjBp8dr",
          source: token.id,
          tokenId: token.id,
        },
      })

      if (response.status === 200) {
        setPaymentComplete(true)
        setQuantity(1)
        setIsConnecting(false)
      }
    } catch (err) {
      setIsConnecting(false)
      alert("We received an error. Please check your card details.")
    }
  }

  const renderForm = (
    <form onSubmit={submitHandler}>
      <div className="form-row form-row--header">
        <h1>Art for Tibet bag </h1>
        <select
          onChange={e => setQuantity(e.target.value)}
          className="quantity"
          value={quantity}
        >
          <option disabled>Quantity</option>
          <option value="1" defaultValue>
            1
          </option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
      </div>
      <div className="form-row">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name*"
          required
          value={fullName}
          onChange={e => setFullName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <CardElement
        className="card-element"
        style={{
          base: {
            color: "black",
            fontSize: "16px",
            "::placeholder": {
              color: "#BBB",
              fontSize: "16px",
            },
          },
        }}
      />

      <div className="form-row">
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Shipping Address*"
          required
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
      </div>
      <div className="form-row">
        <input
          type="text"
          name="city"
          placeholder="City*"
          required
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <input
          type="text"
          name="state"
          placeholder="State/Province*"
          required
          value={stateProvince}
          onChange={e => setStateProvince(e.target.value)}
        />
        <input
          type="text"
          name="country"
          placeholder="Country*"
          required
          value={country}
          onChange={e => setCountry(e.target.value)}
        />
      </div>
      <div className="form-row form-row--footer">
        <p className="total">
          Total: <strong> ${total} USD</strong>
        </p>
        <input type="submit" value={isConnecting ? "..." : "Buy"} /> &nbsp;
        <input
          type="button"
          onClick={resetSuccessAndCloseModal}
          value="Close"
        />
      </div>
    </form>
  )

  const renderSuccessMessage = (
    <div className="success-message">
      <div>
        <h1>Payment Successful!</h1>
        <p>
          Thank you for your purchase! You should be receiving your item in the
          mail very soon! We have emailed you a copy of your invoice for your
          records to the email address you provided.
        </p>
        <p>
          Thank you once again, from all of us here at Art for Tibet!{" "}
          <i className="fas fa-heart" />
        </p>
      </div>
      <div>
        <button onClick={e => setPaymentComplete(false)}>Buy Again!</button>{" "}
        &nbsp;
        <input
          type="button"
          onClick={resetSuccessAndCloseModal}
          value="Close"
        />
      </div>
    </div>
  )

  return (
    <Modal
      portalClassName={className}
      className={contentClassName}
      overlayClassName={overlayClassName}
      isOpen={isOpen}
      onRequestClose={resetSuccessAndCloseModal}
      closeTimeoutMS={500}
    >
      {paymentComplete ? renderSuccessMessage : renderForm}
    </Modal>
  )
}

const StyledPurchaseModal = styled(PurchaseModal)`
  .form-row {
    display: flex;
    flex-direction: column;
    @media (min-width: 600px) {
      flex-direction: row;
    }

    &--header {
      margin: 0 0 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid #eee;
      flex-direction: row;
      justify-content: space-between;

      h1 {
        flex-grow: 1;
        margin: 0;
        @media (max-width: 600px) {
          font-size: 1.6rem;
          white-space: nowrap;
          overflow: hidden;
          max-width: 100%;
          text-overflow: ellipsis;
        }
      }
      .quantity {
        align-self: center;
        margin-left: 0.5rem;
        @media (min-width: 600px) {
          align-self: flex-end;
        }
      }
    }
    &--footer {
      margin-top: 0.5rem;
      padding-top: 1rem;
      align-items: flex-start;
      flex-direction: row;

      .total {
        flex-grow: 1;
        font-size: 1.2rem;
        line-height: 1;
      }
    }

    input {
      margin-bottom: 0.5rem;
      @media (min-width: 600px) {
        flex: 1;
        min-width: 100px;
        margin-right: 0.5rem;
      }
      :last-child {
        margin-right: 0;
      }
    }
  }

  /* The following two classnames were generated by Stripe. */
  .StripeElement {
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 0rem 0.75rem;
    height: 36px;
    background-color: white;
    margin-bottom: 1.5rem;
  }

  .StripeElement--focus {
    outline: none;
    box-shadow: 0 0 0px 3px rgba(34, 193, 195, 0.3);
    border-color: #6fcdf5 !important;
  }

  &__overlay {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 9999999;
    opacity: 0;
    transition: opacity 0.2s;
    &.ReactModal__Overlay--after-open {
      opacity: 1;
    }
    &.ReactModal__Overlay--before-close {
      opacity: 0;
      transition: opacity 0.4s;
    }
  }

  &__content {
    background: #fff;
    -webkit-overflow-scrolling: touch;
    border-radius: 4px;
    outline: none;
    padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    width: 95%;
    max-width: 600px;
    min-height: 150px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
    transform: translate3d(-50%, -45%, 0) scale(0.9);
    opacity: 0;
    transition: transform 0.5s 0.3s ease-in-out, opacity 0.7s 0.3s ease-in-out;
    &.ReactModal__Content--after-open {
      opacity: 1;
      transform: translate3d(-50%, -50%, 0) scale(1);
    }

    &.ReactModal__Content--before-close {
      opacity: 0;
    }
  }

  .card-element {
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 0rem 0.75rem;
    background-color: white;
    display: flex;
    align-items: center;

    > * {
      display: block;
      width: 100%;
    }

    :focus {
      outline: none;
      box-shadow: 0 0 0px 3px rgba(34, 193, 195, 0.3);
      border: 1px solid #6fcdf5;
    }
    ::placeholder {
      color: #bbb;
    }
  }

  .success-message {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;

    div:first-child {
      h1 {
        margin: 0 0 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid #eee;
      }
    }
    div:nth-child(2) {
      text-align: right;
      margin-top: 1rem;
    }
  }
`

export default injectStripe(StyledPurchaseModal)
