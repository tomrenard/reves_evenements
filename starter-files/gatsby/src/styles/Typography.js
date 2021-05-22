import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Poppins', sans-serif;
  }
  html {
    font-family: 'Poppins', sans-serif;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  a {
    color: var(--black);
    text-decoration: none;
    text-decoration-skip-ink: none;
  }
`;


export default Typography;
