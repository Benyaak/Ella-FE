/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components/macro';

// Components
// TODO FOOTER, HEADER


const MaxWidth = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const ContentContainer = styled.div`
  grid-column: 2/-2;
`;

const OverflowController = styled.div`
  position: relative;
  overflow: hidden;
  min-height: calc(100vh - 84px - 170px);
`;

export default Input => {
  // eslint-disable-next-line react/prefer-stateless-function
  class Page extends React.Component {
    render() {
      return (
        <>
          <OverflowController>
            <MaxWidth>
              <ContentContainer>
                <Input {...this.props} />
              </ContentContainer>
            </MaxWidth>
          </OverflowController>
        </>
      );
    }
  }

  return Page;
};
