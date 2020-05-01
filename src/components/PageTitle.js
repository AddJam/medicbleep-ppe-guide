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
  font-size: 44px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1.06px;
`
