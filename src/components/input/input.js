import React, { Fragment } from 'react'

import styled from 'styled-components'
import { colors } from 'config'

const Input = ({ label, type, onKeyUp }) => {
  return (
    <Fragment>
      {label ? <Label>{label}</Label> : null}
      {type === 'input' ? (
        <InputTag onKeyUp={onKeyUp} name={label} />
      ) : (
        <Textarea name={label} onKeyUp={onKeyUp} />
      )}
    </Fragment>
  )
}

export default Input

const { blue } = colors

export const InputTag = styled.input`
  width: 100%;
  height: 55px;
  padding: 20px;
  border-radius: 29px;
  outline: none;
  border: 1px solid #e4e4e4;
  margin-bottom: 47px;
  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
`

export const Textarea = styled.input`
  width: 100%;
  padding: 20px;
  resize: none;
  height: 155px;
  border-radius: 29px;
  outline: none;
  border: 1px solid #e4e4e4;
  margin-bottom: 47px;
`

export const Label = styled.label`
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.43px;
  width: 100%;
  color: ${blue};
  margin-bottom: 17px;
  @media (max-width: 767px) {
    margin-bottom: 10px;
  }
`

export const H1 = styled.h1`
  color: ${blue};
  font-size: 34px;
  font-family: Arial;
  font-weight: bold;
  margin: 10px 0px;
`
