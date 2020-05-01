import React, { Fragment } from 'react'

import styled from 'styled-components'
import { colors } from 'config'

const Input = (props) => {
  const { label } = props
  return (
      <Fragment>
         {label ? (
             <Label>{label}</Label>
         ):null} 
        <InputTag />
      </Fragment>
  );
}

export default Input

const { blue } = colors

export const InputTag = styled.input`
    width: 100%;
    height: 55px;
    padding: 20px;
    border-radius: 29px;
    outline: none;
    border: 1px solid #E4E4E4;
    margin-bottom: 47px;
`;

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
`;

export const H1 = styled.h1`
  color: ${blue};
  font-size: 34px;
  font-family: Arial;
  font-weight: bold;
  margin: 10px 0px;
`
