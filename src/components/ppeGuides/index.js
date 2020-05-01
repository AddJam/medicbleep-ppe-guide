import React from 'react'
import styled from 'styled-components'
import { colors } from 'config'
import { Row } from 'react-bootstrap'
import DoingBlock from './DoingBlock'

const PPEGuides = (props) => {
  const { ppeGuides } = props

  return (
    <GraySection>
      <H2>What are you doing?</H2>
      <Row>
        {ppeGuides.map((data, key) => (
          <DoingBlock data={data} key={key} />
        ))}
      </Row>
    </GraySection>
  )
}

export default PPEGuides

const { blue, gray } = colors

export const GraySection = styled.div`
  color: ${blue};
  background: ${gray};
  padding: 35px 25px;
  border-radius: 12px;
  margin: 0 0 35px 0;
  p {
    margin: 0;
  }
`

export const H2 = styled.h2`
  color: ${blue};
  font-size: 18px;
  font-family: Arial;
  font-weight: normal;
  margin: 0 0 15px 0;
`
