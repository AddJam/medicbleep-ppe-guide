import React, { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import Input from 'components/input/input'
import Textarea from 'components/input/textarea'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'

const ContactUs = () => {
  return (
    <Fragment>
      <PageTitle title="Get in touch" />
      <ContactForm>
        <Input label="Name" />
        <Input label="Email" />
        <Textarea label="Message" />
        <Button>Send</Button>
      </ContactForm>
    </Fragment>
  )
}

export const ContactForm = styled.div`
  width: 40%;
  text-align: center;
  button {
    width: 128px;
    line-height: initial;
    height: 30px;
    border-radius: 15px;
    border: none;
    background-color: #00a778;
  }
`

export default ContactUs
