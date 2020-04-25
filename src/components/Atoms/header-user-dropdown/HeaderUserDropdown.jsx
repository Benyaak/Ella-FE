import React from 'react';
import { PropTypes } from 'prop-types';
import NavDropdown from 'react-bootstrap/NavDropdown';

const HeaderUserDropdown = ({ itemText1, itemText2, itemHref1, itemHref2 }) => (
  <NavDropdown title="User Settings" id="basic-nav-dropdown">
    <NavDropdown.Item href={itemHref1}>{itemText1}</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href={itemHref2}>{itemText2}</NavDropdown.Item>
  </NavDropdown>
);

HeaderUserDropdown.propTypes = {
    itemText1: PropTypes.string.isRequired,
    itemText2: PropTypes.string.isRequired,
    itemHref1: PropTypes.string.isRequired,
    itemHref2: PropTypes.string.isRequired,
};

export default HeaderUserDropdown;
