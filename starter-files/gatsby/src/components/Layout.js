import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import styled from 'styled-components';

export default function Layout({ props, children, location }) {
  console.log(props);
  return (
    <>
      <GlobalStyles />
      <Typography />
      <>
        <Nav location={location} />
          {children}
        <Footer />
      </>
    </>
  );
}
