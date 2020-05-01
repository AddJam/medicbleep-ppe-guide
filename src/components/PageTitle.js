import React from 'react'

import styled from 'styled-components'
import { colors } from 'config'

const PageTitle = (props) => {
  const { title } = props
  return <H1>{title}</H1>
}

export default PageTitle

const { blue } = colors

export const H1 = styled.h1`
  color: ${blue};
  font-family: Arial;
  margin: 10px 0px;
  font-weight: bold;
  @media (max-width: 479px) {
    font-size: 28px;
  }
`
