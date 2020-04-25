import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { PropTypes } from 'prop-types';
import HeaderLogo from '../../Atoms/header-logo/HeaderLogo';
import LoginButton from '../../Atoms/login-button/LoginButton'
import RegisterButton from '../../Atoms/register-button/RegisterButton'
import HeaderUserDropdown from '../../Atoms/header-user-dropdown/HeaderUserDropdown';

const HeaderBar = ({isLoggedIn}) => (
  <Navbar bg="light" expand="lg">
    <HeaderLogo text='ELLA' />
    <Nav>Electronic Learning Assistant</Nav>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto" />
      {!isLoggedIn && <LoginButton text='Login' />}
      {!isLoggedIn && <RegisterButton text='Register' />}
      {isLoggedIn && <HeaderUserDropdown itemText1='My Account' itemText2='Logout' itemHref1='link1' itemHref2='logout' />}
    </Navbar.Collapse>
  </Navbar>
);

HeaderBar.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
};

export default HeaderBar;
