import styled from 'styled-components/macro';
import { Colors } from '../../../styles/Colors';
import { breakpoints } from '../../../styles/Breakpoints';

export const Title = styled.h1`
  font-size: 1.8rem;
  font-family: IBM Plex Sans, 'sans-serif';
  color: ${Colors.darkestGray.hex};
  font-weight: normal;
  margin-bottom: 8px;

  @media (${breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;
