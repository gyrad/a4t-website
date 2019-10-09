import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { Elements } from "react-stripe-elements"

import PrintPurchaseModal from "./printPurchaseModal"

const Cart = ({ className, items, addToCart, removeFromCart, setCart }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [total, setTotal] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)
  const togglerEl = useRef(null)
  const [printPurchaseModalIsOpen, setPrintPurchaseModalIsOpen] = useState(
    false
  )

  const toggleCart = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    togglerEl.current.style.visibility = isOpen ? "visible" : "hidden"
    togglerEl.current.style.opacity = isOpen ? 1 : 0
  }, [isOpen])

  useEffect(() => {
    let acc = 0
    let itemTotal
    let quantity = 0
    items.forEach(item => {
      itemTotal = item.total * item.quantity
      acc += itemTotal
      quantity += item.quantity
    })
    setTotal(acc)
    setTotalQuantity(quantity)
  }, [items])

  const renderItems = items.map(item => {
    return (
      <div key={item.id} className="cart-item">
        <div>
          <strong>{item.title}</strong>
          <br />
          <em>{item.artist}</em>
        </div>
        <div>
          {item.quantity} &times; ${Math.round(item.total)} &nbsp;
          <button onClick={() => removeFromCart(item)}> - </button>{" "}
          <button onClick={() => addToCart(item)}> + </button>
        </div>
      </div>
    )
  })

  return (
    <div className={className}>
      <div className={`toggler ${isOpen ? `active` : ``}`} onClick={toggleCart}>
        <i className={`fas fa-angle-${isOpen ? `down` : `up`}`} /> Cart (
        {totalQuantity})
      </div>

      <div className="cart-items" ref={togglerEl}>
        {items.length ? renderItems : "Cart is empty"}

        <div className="total">
          <strong>TOTAL:</strong> ${total} USD
        </div>
        <div className="action-btns">
          <button
            onClick={() => setPrintPurchaseModalIsOpen(true)}
            disabled={total === 0 ? true : false}
          >
            Checkout
          </button>{" "}
          <button onClick={toggleCart}>Close</button>
        </div>
      </div>

      <Elements>
        <PrintPurchaseModal
          isOpen={printPurchaseModalIsOpen}
          closeModal={() => setPrintPurchaseModalIsOpen(false)}
          title="Checkout"
          total={total}
          setCart={setCart}
          items={items}
          setIsOpen={setIsOpen}
          totalQuantity={totalQuantity}
        />
      </Elements>
    </div>
  )
}

const StyledCart = styled(Cart)`
  .toggler {
    position: fixed;
    bottom: 0;
    right: 0;
    background-color: rgb(237, 104, 161);
    color: white;
    z-index: 20;
    padding: 0.25rem 0.5rem;
    cursor: pointer;
    border-radius: 5px 0 0 0;
    transition: background-color 0.5s ease-in-out;

    &.active {
      background-color: rgb(242, 153, 192);
    }
  }

  .cart-items {
    position: fixed;
    bottom: 33px;
    right: 0;
    background-color: #fff;
    color: black;
    z-index: 20;
    padding: 1rem;
    visibility: hidden;
    width: 400px;
    max-width: 100%;
    box-shadow: 0 3px 18px rgba(0, 0, 0, 0.3);
    transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;

    .total {
      padding: 0.5rem 0;
      font-size: 1.2rem;
    }

    .action-btns {
      button:disabled {
        cursor: not-allowed;
        background-color: #ccc;
        border-color: #ccc;
        :hover {
          transform: none;
          box-shadow: none;
          color: #666;
        }
      }
    }

    .cart-item {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      padding: 0.4rem 0;
      display: flex;
      &:first-child {
        padding-top: 0;
      }

      div {
        flex: 1;

        :last-child {
          flex: 1;
          text-align: right;
          button {
            width: 1.5rem;
            padding: 2px;
          }
        }
      }
    }
  }
`

export default StyledCart
