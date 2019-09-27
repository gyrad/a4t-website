import React, { useState } from "react"
import { Elements } from "react-stripe-elements"
import styled from "styled-components"

import { Container } from "../components/layoutComponents"
import PurchaseModal from "../components/purchaseModal"
import a4tbag from "../images/a4tbag.jpg"

const PurchaseCard = ({ className }) => {
  const [purchaseModalIsOpen, setPurchaseModalIsOpen] = useState(false)

  return (
    <Container className={className}>
      <Elements>
        <PurchaseModal
          isOpen={purchaseModalIsOpen}
          closeModal={() => setPurchaseModalIsOpen(false)}
        />
      </Elements>

      <img src={a4tbag} alt="Art for Tibet bag" />
      <div>
        <div>
          <h2>Get your swag on</h2>
          <p>
            Support Tibet by buying one of our classic Art for Tibet tote bags!
            Get them for $20 including shipping and taxes while supplies last.
          </p>
        </div>
        <button onClick={() => setPurchaseModalIsOpen(true)}>Buy Now!</button>
      </div>
    </Container>
  )
}

const StyledPurchaseCard = styled(PurchaseCard)`
  background: white;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  width: 90%;
  @media (min-width: 600px) {
    flex-direction: row;
    width: 70%;
  }
  @media (min-width: 1000px) {
    flex-direction: row;
    width: 50%;
  }
  padding: 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

  :hover {
    img {
      filter: grayscale(1);
    }
  }

  > img {
    display: inline-block;
    flex: 1;
    width: 100%;
    @media (min-width: 600px) {
      width: 40%;
    }
    object-fit: cover;
    transition: filter 0.5s;
  }

  > div {
    flex: 1;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2 {
      margin: 0;
      margin-bottom: 1rem;
    }
    p {
      margin-bottom: 1rem;
    }
  }
`

export default StyledPurchaseCard
