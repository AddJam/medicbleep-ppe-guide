import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from 'config'
import { Row, Col } from 'react-bootstrap'
import CustomModal from './CustomModal'
import { useSelector } from 'react-redux'
import { ppeItemsData } from 'state/Response'

const PPEItems = () => {
  const ppeItems = useSelector(ppeItemsData)
  const [showModal, setShowModal] = useState(0)

  const getModal = (value) => {
    setShowModal(value)
  }

  const hideModal = () => {
    setShowModal(0)
  }
  return (
    <GreenSection>
      <H2>PPE Overview</H2>
      <Row>
        {ppeItems &&
          ppeItems.length > 0 &&
          ppeItems.map((data, key) => {
            const { id, fields } = data
            const { name, description } = fields
            return (
              <Col md={4} key={key}>
                <BlockLink className={showModal === id ? 'opened' : ''}>
                  <H3 onClick={() => getModal(id)}>{name}</H3>
                  <CustomModal
                    show={showModal === id}
                    onHide={() => hideModal(id)}
                    name={name}
                    description={description}
                  />
                </BlockLink>
              </Col>
            )
          })}
      </Row>
    </GreenSection>
  )
}

export default PPEItems

const { blue, lightGreen, white } = colors

export const GreenSection = styled.div`
  color: ${blue};
  background: ${lightGreen};
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

export const BlockLink = styled.div`
  display: block;
  padding: 0;
  border-radius: 3px;
  color: ${blue};
  text-decoration: none;
  position: relative;
  &.opened {
    z-index: 1;
  }
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
  padding: 20px;
  background: ${white};
  cursor: pointer;
`
