import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const FooterStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  ul {
    list-style: none;
  }
  .title {
    font-weight: bolder;
  }
`;

export default function Footer() {
  return (
    <>
      <footer>
        <FooterStyles>
          <ul>
            <li className="title">Rêves d'Événements</li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
          <ul>
            <li className="title">Événements</li>
            <li>Séminaires</li>
            <li>Voyages incentives</li>
          </ul>
          <ul>
            <li className="title">Plan du site</li>
            <li><Link to="/">Événements</Link></li>
            <li><Link to="/about">À propos</Link></li>
          </ul>
        </FooterStyles>
        <p className='center'>&copy; Rêves d'Événements {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
