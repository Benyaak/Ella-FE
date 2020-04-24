import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Padded, Margin } from '../../styles/Shared';
// TODO - Import Logo

export const Unauthorised = () => {
  const [redirectHome, setRedirectHome] = useState(false);
  const onHomeClick = () => setRedirectHome(true);

  if (redirectHome) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Margin>
        <Padded>
          {/* TODO: ADD LOGO */}
          <h2>Unauthorised.</h2>
          <p>Sorry you are not authorised to view this page.</p>
          <button type="button" onClick={onHomeClick}>
            Go Home
          </button>
        </Padded>
      </Margin>
    </>
  );
};

export default Unauthorised;
