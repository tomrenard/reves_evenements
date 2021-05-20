import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --blue: #006d77;
    --green: #83c5be;
    --grey: #edf6f9;
    --pink: #ffddd2;
    --orange: #e29578;
    --black: #000000;
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  body {
    font-size: 1rem;
    height: 100%;
    margin: 0;
  }

  button {
    font: Oxygen, 'sans-serif';
    font-size: 1rem;
  }

  .center {
    text-align: center;
  }
`;

export default GlobalStyles;
