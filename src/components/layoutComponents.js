import styled from "styled-components"

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const MainContent = styled.div`
  background-color: #efefef;
  flex-grow: 1;
  padding-bottom: 2rem;
`

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 1rem;
  @media (min-width: 600px) {
    padding: 1.5rem;
  }
  ${({ novpadding }) =>
    novpadding &&
    `
      margin-top: 0;
      margin-bottom: 0;
    `}
  ${({ nohpadding }) =>
    nohpadding &&
    `
      margin-left: 0;
      margin-right: 0;
    `}
`
