import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import { colors } from 'config'

const DoingBlock = (props) => {
  console.log('DoingBlock--', props)
  const { data } = props
  const { id, fields } = data
  const { title, short_description } = fields
  return (
    <Col md={4}>
      <BlockLink to={`/guide/${id}`}>
        <H3>{title}</H3>
        <p>{short_description}</p>
      </BlockLink>
    </Col>
  )
}

export default DoingBlock

const { blue, white } = colors
export const BlockLink = styled(Link)`
  background: ${white};
  display: block;
  padding: 70px 20px 20px;
  border-radius: 3px;
  color: ${blue};
  text-decoration: none;
  :hover {
    text-decoration: none;
    color: ${blue};
    box-shadow: 0 0 3px #ccc;
  }
  @media (max-width: 767px) {
    & {
      margin-bottom: 20px;
    }
  }
`

export const H3 = styled.h3`
  color: ${blue};
  font-size: 18px;
  font-family: Arial;
  font-weight: bold;
  margin: 0;
`
