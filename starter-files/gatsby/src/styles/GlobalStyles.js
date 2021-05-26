import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --gold: #C4AF9B;
    --blue: #006BFF;
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

  h1,h2,h3,h4,h5 {
    margin: 0 auto;
  }

  ol, ul {
    list-style: none;
  }

  button {
    a {
      color: white;
    }
    font: 'Poppins', sans-serif;
    font-size: 1rem;
    justify-content: center;
    display: inline-flex;
    text-align: center;
    color: white;
    background-color: black;
    height: 48px;
    padding: 0 24px;
    border-radius: 40px;
    line-height: 1;
    align-items: center;
    border: none;
    outline: none;
    cursor: pointer;
    &:hover {
      background-color: var(--blue);
    }
  }

  .center {
    text-align: center;
  }
`;

export default GlobalStyles;
