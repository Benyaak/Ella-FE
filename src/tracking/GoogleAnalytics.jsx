import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';



const GoogleAnalytics = ({ children }) => {
    let trackingId;

    if (window.googleAnalyticsConfig) {
        trackingId = window.googleAnalyticsConfig.trackingId
        ReactGA.initialize(trackingId);
    };

    const location = useLocation();

    useEffect(()=>{
        if (trackingId) {
          ReactGA.set({page:location.pathname});
          ReactGA.pageview(location.pathname);
        }
    }, [trackingId, location.pathname]);

    return ( <>{children}</> );
};

GoogleAnalytics.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]).isRequired
};

export default GoogleAnalytics;
