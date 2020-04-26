import React from 'react';
import { PropTypes } from 'prop-types';
import { Header } from './styles';

const HeaderLogo = ({ text }) => <Header>{text}</Header>;

HeaderLogo.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeaderLogo;
