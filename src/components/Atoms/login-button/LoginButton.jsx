import React from 'react';
import { PropTypes } from 'prop-types';
import Button from 'react-bootstrap/Button';
import { Header } from './styles';

const LoginButton = ({ text }) => <Header><Button variant="outline-success">{text}</Button></Header>;

LoginButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default LoginButton;
