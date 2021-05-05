import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import styled from 'styled-components';

const SiteBorderStyles = styled.div`
  margin: 2rem;
  padding: 5px;
`;


export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles>
        <Nav/>
          {children}
        <Footer />
      </SiteBorderStyles>
    </>
  );
}
