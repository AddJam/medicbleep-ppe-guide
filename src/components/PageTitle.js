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
  font-size: 34px;
  font-family: Arial;
  font-weight: bold;
  margin: 10px 0px;
`
