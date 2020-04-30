import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { HeaderSection } from './HeaderStyle'
const logoMedicBleep = require('../../assets/images/new-logoMedicBleep.svg')

const Header = () => {
  return (
    <HeaderSection>
      <Navbar className="justify-content-between">
        <Navbar.Brand>
          <Link to="/">
            <img src={logoMedicBleep} alt="" />
          </Link>
        </Navbar.Brand>
        <Nav>
          <Link to="/About">About</Link>
          <Link to="/Faq">FAQ</Link>
          <Link to="/ContactUs" className="highlighted">
            Contact Us
          </Link>
        </Nav>
      </Navbar>
    </HeaderSection>
  )
}

export default Header
