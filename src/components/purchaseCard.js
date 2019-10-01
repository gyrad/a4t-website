import React, { useState } from "react"
import { Elements } from "react-stripe-elements"
import styled from "styled-components"

import { Container } from "../components/layoutComponents"
import PurchaseModal from "../components/purchaseModal"
import a4tbag from "../images/a4tbag-alt.jpg"

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
          <h2>
            <i className="fas fa-fire" /> &nbsp;Get your swag on
          </h2>
          <p>
            Support Tibet by buying one of our classic Art for Tibet tote bags!
            Get them in gray or black for $20 including shipping and taxes while
            supplies last.
          </p>
        </div>
        <button onClick={() => setPurchaseModalIsOpen(true)}>Buy Now!</button>
      </div>
    </Container>
  )
}

const StyledPurchaseCard = styled(PurchaseCard)`
  background: white;
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  width: 90%;
  @media (min-width: 600px) {
    flex-direction: row;
    width: 80%;
  }
  @media (min-width: 1000px) {
    flex-direction: row;
    width: 70%;
  }
  padding: 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.4s, transform 0.4s;

  :hover {
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.25);
    transform: translateY(-1px);
  }

  > img {
    display: inline-block;
    flex: 1;
    width: 100%;
    @media (min-width: 600px) {
      width: 50%;
    }
    object-fit: cover;
  }

  > div {
    flex: 1;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
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
