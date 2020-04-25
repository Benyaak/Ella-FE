import React from 'react';
import { PropTypes } from 'prop-types';
import Button from 'react-bootstrap/Button';
import { Header } from './styles';

const RegisterButton = ({ text }) => <Header><Button variant="outline-secondary">{text}</Button></Header>;

RegisterButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default RegisterButton;
