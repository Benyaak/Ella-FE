import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Padded, Margin } from '../../styles/Shared';
// TODO - Logo to be added

export const NotFound = () => {
  const [redirectHome, setRedirectHome] = useState(false);
  const onHomeClick = () => setRedirectHome(true);

  if (redirectHome) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Margin>
        <Padded>
          {/* TODO - Logo to be added */}
          <h2>Not Found.</h2>
          <p>Sorry, the page you are looking for does not exist.</p>
          <button type="button" onClick={onHomeClick}>
            Go Home
          </button>
        </Padded>
      </Margin>
    </>
  );
};

export default NotFound;
