/*eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Page from './page';

export const secure = Input => {
  class SecurePage extends React.Component {
    render() {
      const { user } = this.props;
      const local = window.location.hostname === 'localhost';
      const path = window.location.pathname;

      if (user && user.details && user.details.authenticated) {
        return <Input {...this.props} />;
      }

      userManager.signinRedirect({ state: path });

      return (
        <Container>
          <h2>Loading...</h2>
          <LoadingSpinner />
        </Container>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      user: state.user,
    };
  }

  SecurePage.propTypes = {
    user: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      loaded: PropTypes.bool.isRequired,
    }),
  };

  return connect(mapStateToProps)(Page(SecurePage));
};

export default secure;
