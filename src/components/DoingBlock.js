import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import { colors } from 'config'

const DoingBlock = (props) => {
  const { title, content } = props;
  return (
    <Col md={4}>
      <BlockLink to='/'>
      <H3>{title}</H3>
      <p>{content}</p>
      </BlockLink>
    </Col>
  )
}

export default DoingBlock

const { blue, white } = colors;
export const BlockLink = styled(Link)`
  background: ${white};
  display: block;
  padding: 70px 20px 20px;
  border-radius: 3px;
  color: ${blue};
  text-decoration: none;
  :hover{
    text-decoration: none;
    color: ${blue};
    box-shadow: 0 0 3px #CCC;
  }
  @media (max-width: 767px) {
    &{
      margin-bottom: 20px;
    }
  }
`;


export const H3 = styled.h3`
  color: ${blue};
  font-size: 18px;
  font-family: Arial;
  font-weight: bold;
  margin: 0;
`