import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import { Container } from "../components/layoutComponents"
import PrintProjectCard from "../components/printProjectCard"
import SEO from "../components/seo"

import loveCeyAdams from "../images/love-ceyadams.jpg"
import metrocardCarlos from "../images/metrocard-carlos.jpg"
import theThreeGracesChoichun from "../images/thethreegraces-choichun.jpg"

const PrintProjectPage = () => {
  console.log(process.env.GATSBY_SKU_ARTWORK_THE_THREE_GRACES)
  return (
    <Layout>
      <SEO title="About" />
      <Container>
        <h1>Print Project</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minus
          beatae molestiae, harum hic pariatur quis suscipit incidunt velit quos
          tempore unde cum nesciunt, tenetur quaerat labore, dolor expedita quas
          sit fugit fuga iure neque dolore. Autem, consequatur veniam voluptatem
          similique recusandae rerum, eveniet reiciendis quidem in nemo ullam
          minus dolorum eaque at. Vero a tenetur nemo rerum libero culpa animi
          quisquam nulla, asperiores delectus doloremque quibusdam quam velit
          harum, aliquam labore similique, obcaecati reprehenderit accusamus!
          Corrupti reiciendis quod illum?
        </p>

        <PrintProjectCardsWrapper>
          <PrintProjectCard
            image={loveCeyAdams}
            title="LOVE (Blue)"
            artist="Cey Adams"
            skuId={process.env.GATSBY_SKU_ARTWORK_LOVE}
            total="103.00"
            quantity="50"
          >
            <p>24” x 18”</p>
            <p>6 color silkscreen print on 100 lb, Acid Free Paper</p>
            <p>Signed by Cey Adams. Numbered Edition of 50</p>
            <p>2019</p>
          </PrintProjectCard>
          <PrintProjectCard
            image={metrocardCarlos}
            title="14th Dalai Lama"
            artist="Juan Carlos Pinto"
            skuId={process.env.GATSBY_SKU_ARTWORK_14TH_DALAI_LAMA}
            total="103.00"
            quantity="30"
          >
            <p>16” x 20”</p>
            <p>Digital Print</p>
          </PrintProjectCard>
          <PrintProjectCard
            image={theThreeGracesChoichun}
            title="The Three Graces"
            artist="Choichun Leung"
            skuId={process.env.GATSBY_SKU_ARTWORK_THE_THREE_GRACES}
            total="43.00"
            quantity="30"
          >
            <p>13” x 16”</p>
            <p>Giclee on archival paper</p>
            <p>30 Prints</p>
          </PrintProjectCard>
        </PrintProjectCardsWrapper>
      </Container>
    </Layout>
  )
}

const PrintProjectCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2rem 0;
`

export default PrintProjectPage
