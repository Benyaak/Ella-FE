import React from 'react';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-named-as-default-member
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PDFViewer from '../../components/Molecules/pdf-viewer/PDFViewer';

export const Home = () => {
  const dispatch = useDispatch();
  dispatch({
    type: 'TRIGGER_INITIAL_STATE',
  });
  const ColoredLine = ({ color }) => (
    <hr
      style={{
            color,
            backgroundColor: color,
            height: 0.5
        }}
    />
);
  
  return (
    <div>
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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <ColoredLine color="gray" />
      <div>Home Component</div>
      <PDFViewer path='./Report.pdf' />
    </div>
  );
};

export default Home;
