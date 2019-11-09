import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Cart from "../components/cart"
import Layout from "../components/layout"
import { Container } from "../components/layoutComponents"
import PrintProjectCard from "../components/printProjectCard"
import SEO from "../components/seo"
import PurchaseCard from "../components/purchaseCard"

import loveCeyAdams from "../images/love-ceyadams.jpg"
import metrocardCarlos from "../images/metrocard-carlos.jpg"
import theThreeGracesChoichun from "../images/thethreegraces-choichun.jpg"
import forestBuddha from "../images/forest-buddha-karma-phuntsok.jpg"
import tsewangLhamo from "../images/tsewang-lhamo.jpg"

const PrintProjectPage = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  )

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = item => {
    let isUnique = true
    let updateQuantityChecker = cart.map(cartItem => {
      if (cartItem.id === item.id) {
        cartItem.quantity += 1
        isUnique = false
      }
      return cartItem
    })

    if (isUnique) {
      setCart([...cart, item])
    } else {
      setCart(updateQuantityChecker)
    }
  }

  const removeFromCart = item => {
    let updateQuantityChecker = cart.map(cartItem => {
      if (cartItem.id === item.id) {
        cartItem.quantity -= 1
      }
      return cartItem
    })

    setCart(updateQuantityChecker.filter(cartItem => cartItem.quantity > 0))
  }

  return (
    <Layout>
      <SEO title="Print Project" />
      <Container>
        <h1>Print Project</h1>
        <p>
          In celebration of the 9<sup>th</sup> annual Art for Tibet benefit and
          group exhibit this November, Art for Tibet collaborated with some of
          our favorite artists, including Cey Adams, Choichun Leung, Juan Carlos
          Pinto, and emerging Tibetan graphic designer Tsewang Lhamo, to produce
          a series of limited edition prints exclusive to Art for Tibet. 100% of
          the sale price from these affordable, limited edition prints will
          directly benefit the activism and campaigns work of Students for a
          Free Tibet. These prints are on sale online now through November 7,
          2019. The prints will also be available for sale at Faction Arts
          Gallery during the exhibit, November 2-7.
        </p>

        <PrintProjectCardsWrapper>
          <PrintProjectCard
            image={loveCeyAdams}
            title="LOVE (Blue)"
            artist="Cey Adams"
            id="001"
            total="100.00"
            quantity="50"
            addToCart={addToCart}
            isSoldOut={true}
          >
            <p>Unframed 24” x 18”</p>
            <p>6 color silkscreen print on 100 lb, Acid Free Paper</p>
            <p>Signed by Cey Adams. Numbered Edition of 50</p>
            <p>2019</p>
          </PrintProjectCard>
          <PrintProjectCard
            image={metrocardCarlos}
            title="14th Dalai Lama"
            artist="Juan Carlos Pinto"
            id="002"
            total="100.00"
            quantity="35"
            addToCart={addToCart}
          >
            <p>Unframed 10” x 20”</p>
            <p>Fine Art Digital Prints</p>
            <p>Archival Ink on Enhanced Matte Paper</p>
            <p>35 Prints signed</p>
          </PrintProjectCard>

          <PrintProjectCard
            image={theThreeGracesChoichun}
            title="The Three Graces"
            artist="Choichun Leung"
            id="003"
            total="100.00"
            quantity="25"
            addToCart={addToCart}
          >
            <p>Unframed 16” x 13”</p>
            <p>Archival Pigment Print on acid free paper</p>
            <p>25 Prints signed</p>
          </PrintProjectCard>

          <PrintProjectCard
            image={forestBuddha}
            title="Forest Buddha"
            artist="Karma Phuntsok"
            id="004"
            total="50.00"
            quantity="25"
            addToCart={addToCart}
          >
            <p>Unframed 18” x 24”</p>
            <p>Fine Art Digital Prints</p>
            <p>Archival Ink on Enhanced Matte Paper</p>
            <p>25 Prints unsigned</p>
          </PrintProjectCard>

          <PrintProjectCard
            image={tsewangLhamo}
            title="Mistaken Identity"
            artist="Tsewang Lhamo"
            id="005"
            total="100.00"
            quantity="25"
            addToCart={addToCart}
          >
            <p>Unframed 16” x 20”</p>
            <p>Silkscreen Prints</p>
            <p>Acrylic on Heavyweight Fine Art Poster Paper</p>
            <p>25 Prints signed</p>
          </PrintProjectCard>
        </PrintProjectCardsWrapper>

        <InfoCard>
          <p>
            For questions or info, please reach us at:
            <br />
            <strong>artfortibet@studentsforafreetibet.org</strong>
          </p>
        </InfoCard>

        <PurchaseCard />
      </Container>

      <Cart
        items={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        setCart={setCart}
      />
    </Layout>
  )
}

const PrintProjectCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 0;
`

const InfoCard = styled.div`
  text-align: center;
  background-color: white;
  border: 1px solid #eee;
  padding: 2rem 0.5rem;
`

export default PrintProjectPage
