import React from 'react'
import { Col } from 'react-bootstrap'

const DoingBlock = (props) => {
  const { title, content } = props;
  return (
    <Col md={4}>
      <h3>{title}</h3>
      <p>{content}</p>
    </Col>
  )
}

export default DoingBlock
