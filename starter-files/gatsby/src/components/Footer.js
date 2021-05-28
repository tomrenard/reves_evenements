import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const SectionFooterStyles = styled.section`
  padding: 0px 40px;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const DivFooterStyles = styled.footer`
  border-top: 1px lightgray dotted;
  width: 100%;
  max-width: 1200px;
  padding: 60px 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  text-align: left;
  ul {
    list-style: none;
  }
  h3 {
    margin-bottom: 8px;
  }
  li {
    font-weight: 100;
    padding: 4px 0;
  }
`;

export default function Footer() {
  return (
    <>
      <SectionFooterStyles>
        <DivFooterStyles>
            <ul>
              <h3>Rêves d'Événements</h3>
              <li>Instagram</li>
              <li>Facebook</li>
            </ul>
            <ul>
              <h3>Événements</h3>
              <li>Séminaires</li>
              <li>Voyages incentives</li>
              <li>Teams buildings</li>
              <li>Soirées d'entreprise</li>
            </ul>
            <ul>
              <h3>Destinations</h3>
              <li>France</li>
              <li>Europe</li>
              <li>Asie</li>
              <li>Amérique du Nord</li>
              <li>Amérique du Sud</li>
              <li>Afrique</li>
              <li>Océanie</li>
              <li>Moyen-Orient</li>
            </ul>
            <ul>
              <h3>Plan du site</h3>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/">Événements</Link></li>
              <li><Link to="/">Destinations</Link></li>
              <li><Link to="/about">À propos</Link></li>
              <li><Link to="/about">Contact</Link></li>
            </ul>
        </DivFooterStyles>
      </SectionFooterStyles>
       <p style={{ fontWeight: '100', fontSize: '0.8em' }}className='center'>&copy; Rêves d'Événements {new Date().getFullYear()}</p>
    </>
  );
}
