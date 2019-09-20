import styled from "styled-components"

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const MainContent = styled.div`
  flex-grow: 1;
`

export const Section = styled.div`
  display: block;
`

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 1rem;
  @media (min-width: 600px) {
    padding: 1.5rem;
  }
  && {
    ${({ vpadding }) => `
      padding-top: ${vpadding}rem;
      padding-bottom: ${vpadding}rem;
    `}
    ${({ hpadding }) => `
      padding-left: ${hpadding}rem;
      padding-right: ${hpadding}rem;
    `}
  }
`
