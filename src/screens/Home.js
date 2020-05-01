import React from 'react'
import styled from 'styled-components'
import { colors } from 'config'
import { Row } from 'react-bootstrap'
import DoingBlock from 'components/DoingBlock'

const Home = () => {
  return (
    <GraySection>
      <H2>What are you doing?</H2>
      <Row>
        <DoingBlock title="Putting on" content="Safely put your PPE on" />
        <DoingBlock title="Taking off" content="Removal and disposal" />
        <DoingBlock title="Source PPE" content="Guide to buying more" />
      </Row>
    </GraySection>
  )
}

export default Home

const { blue, gray } = colors

export const GraySection = styled.div`
  color: ${blue};
  background: ${gray};
  padding: 35px 25px;
  border-radius: 12px;
  margin: 0;
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
