import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Padded, Margin } from '../../styles/Shared';
// TODO - Logo be added

export const InternalError = () => {
  const [redirectHome, setRedirectHome] = useState(false);
  const onHomeClick = () => setRedirectHome(true);

  if (redirectHome) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Margin>
        <Padded>
          {/* TODO - Logo be added */}
          <h2>Somethings gone wrong.</h2>
          <p>Sorry something has gone wrong, please try again later.</p>
          <button type="button" onClick={onHomeClick}>
              Go Home
          </button>
        </Padded>
      </Margin>
    </>
  );
};

export default InternalError;
