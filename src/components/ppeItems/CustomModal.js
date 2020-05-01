import React from 'react'
import styled from 'styled-components'
import { colors } from 'config'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const CustomModal = ({ show, name, description, onHide }) => {
  return (
    show && (
      <Popup>
        <CloseLink onClick={onHide}>
          <FontAwesomeIcon icon={faTimes} />
        </CloseLink>
        <H3>{name}</H3>
        <p>{description}</p>
      </Popup>
    )
  )
}

export default CustomModal

const { blue, white } = colors

export const H3 = styled.h3`
  color: ${blue};
  font-size: 18px;
  font-family: Arial;
  font-weight: bold;
  margin: 0;
`
export const Popup = styled.div`
  background: ${white};
  display: block;
  border-radius: 3px;
  padding: 20px 20px 20px;
  position: absolute;
  left: 0;
  top: 0;
  right: -40px;
  box-shadow: 0 0 5px #aaa;
  @media (max-width: 767px) {
    right: 0;
  }
`

export const CloseLink = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 7px 10px;
  cursor: pointer;
  img {
    width: 12px;
  }
`
