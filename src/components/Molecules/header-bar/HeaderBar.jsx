import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { PropTypes } from 'prop-types';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import {Button} from 'primereact/button';

const HeaderBar = () => (
  <Navbar
    bg="light"
    expand="lg"
  >
    <img
      alt=""
      src="/logofinal FULL HD.png"
      width="100"
      height="50"
      className="d-inline-block align-top"
    />
    <Navbar.Brand href="#home">Electronic Learning Assistant</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="home">Home</Nav.Link>
        <NavDropdown title="Upload Lecture" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="newUpload">New Uploads</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <Button className="p-button-success p-button-raised" label="Login" icon="pi pi-sign-in" iconPos="right" />
        <Button className="p-button-secondary p-button-raised" label="Register" icon="pi pi-user-edit" iconPos="right" />
      </Form>
    </Navbar.Collapse>
  </Navbar>
);

export default HeaderBar;
