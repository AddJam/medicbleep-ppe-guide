import React, { Fragment, useState } from 'react'
import PageTitle from 'components/PageTitle'
import Input from 'components/input/input'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'

const ContactUs = () => {
  const [isSubmit, setSubmitOn] = useState(false)
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [message, setmessage] = useState('')

  const emailValidate = (email) => {
    const chkReg = /^[_A-Za-z0-9-']+(\.[_A-Za-z0-9-']+)*@[A-Za-z0-9-]+(\.[a-z0-9-]+)*(\.[A-Za-z]{2,4})$/
    if (email.trim() === '') {
      return false
    }
    if (!chkReg.test(email)) {
      return false
    }
    return true
  }

  const isValid = () => {
    if (name.trim().length > 5 && emailValidate(email) && message !== '') {
      setSubmitOn(true)
    } else {
      setSubmitOn(false)
    }
  }

  const setValue = (event) => {
    console.log(event.target)
    const eventName = event.target.getAttribute('name')
    const value = event.target.value
    if (eventName === 'Name') {
      setname(value)
    }
    if (eventName === 'Email') {
      setemail(value)
    }
    if (eventName === 'Message') {
      setmessage(value)
    }
    setTimeout(() => {
      isValid()
    }, 100)
  }
  return (
    <Fragment>
      <PageTitle title="Get in touch" />
      <ContactForm>
        <Input
          type="input"
          value={name}
          onKeyUp={(e) => setValue(e)}
          label="Name"
        />
        <Input
          type="input"
          value={email}
          onKeyUp={(e) => setValue(e)}
          label="Email"
        />
        <Input
          type="textarea"
          value={message}
          onKeyUp={(e) => setValue(e)}
          label="Message"
        />
        <Button disabled={!isSubmit}>Send</Button>
      </ContactForm>
    </Fragment>
  )
}

export const ContactForm = styled.div`
  width: 420px;
  text-align: center;
  padding-top: 25px;
  @media (max-width: 767px) {
    max-width: 100%;
  }
  button,
  butoon:disabled {
    width: 128px;
    line-height: initial;
    height: 30px;
    border-radius: 15px;
    border: none;
    background-color: #00a778 !important;
  }
`

export default ContactUs
