import React, { Fragment, useState } from 'react'
import PageTitle from 'components/PageTitle'
import Input from 'components/input/input'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'

const ContactUs = () => {
  const [isSubmit, setSubmitOn] = useState(false);
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [message, setmessage] = useState('');
  const setValue = (event) => {
    console.log(event.target);
    const name = event.target.getAttribute('name');
    const value = event.target.value;
    if(name === 'Name'){
      setname(value);
    }
    if(name === 'Email'){
      setemail(value);
    }
    if(name === 'Message'){
      setmessage(value);
    }
  }
  return (
    <Fragment>
      <PageTitle title="Get in touch" />
      <ContactForm>
        <Input type="input" value={name} onKeyUp={(e) => setValue(e)} label="Name" />
        <Input type="input" value={email} onKeyUp={(e) => setValue(e)} label="Email" />
        <Input type="textarea" value={message} onKeyUp={(e) => setValue(e)} label="Message" />
        <Button disabled={!isSubmit}>Send</Button>
      </ContactForm>
    </Fragment>
  )
}

export const ContactForm = styled.div`
  width: 40%;
  text-align: center;
  button, butoon:disabled {
    width: 128px;
    line-height: initial;
    height: 30px;
    border-radius: 15px;
    border: none;
    background-color: #00a778 !important;
  }
`

export default ContactUs
