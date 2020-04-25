import React from 'react';
import { PropTypes } from 'prop-types';
import { Heading } from './styles';

const BannerHeading = ({ text }) => <Heading>{text}</Heading>;

BannerHeading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BannerHeading;
