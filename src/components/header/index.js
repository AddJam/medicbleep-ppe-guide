import React from "react";
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';
import { HeaderSection } from './HeaderStyle';
const logoMedicBleep = require('../../assets/images/new-logoMedicBleep.svg');

const Header = (props) => {
  const { navigateScreen } = props;
  return (
    <HeaderSection>
        <Navbar className="justify-content-between">
            <Navbar.Brand onClick={() => navigateScreen('Home')}>
                <img src={logoMedicBleep} alt="" />
            </Navbar.Brand>
            <Nav>
                <Nav.Link as='span' onClick={() => navigateScreen('About')}>About</Nav.Link>
                <Nav.Link as='span' onClick={() => navigateScreen('Faq')}>FAQ</Nav.Link>
                <Nav.Link as='span' onClick={() => navigateScreen('ContactUs')} className="highlighted">Contact Us</Nav.Link>
            </Nav>
        </Navbar>
    </HeaderSection>
  );
}

export default Header;

Header.propTypes = {
    navigateScreen: PropTypes.func.isRequired,
  };