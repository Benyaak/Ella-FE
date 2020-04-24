import { createGlobalStyle } from 'styled-components/macro';
import { Colors } from './Colors';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family:  Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${Colors.dark.hex};
    background-color: ${Colors.lightestGray.hex}
  }

  button {
    font-family: Arial, Helvetica, sans-serif;
  }
`;
