import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body{
    font-family: Arial;
    font-size: 16px;
}

p{
    font-size: 16px;
}
`

export const MainContainer = styled.div`
  padding: 25px 35px 200px;
  @media (max-width: 479px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`
