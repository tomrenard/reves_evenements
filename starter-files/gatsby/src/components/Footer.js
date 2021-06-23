import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

const SectionFooterStyles = styled.section`
  padding: 0px 40px;
  margin-top: 2em;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const DivFooterStyles = styled.footer`
  border-top: 1px lightgray dotted;
  width: 100%;
  max-width: 1200px;
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
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
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Footer() {
  const data = useStaticQuery(graphql`query Footer {
    allSanityEvent {
      nodes {
        type
        _id
        slug {
          current
        }
        }
      }
    allSanityDestination {
      nodes {
        type
        _id
        slug {
          current
        }
      }
    }
    }
  `)
  const events = data.allSanityEvent.nodes;
  const destinations = data.allSanityDestination.nodes;
  return (
    <>
      <SectionFooterStyles>
        <DivFooterStyles>
            <ul>
              <h3>Rêves d'Événements</h3>
              <li><a target="_blank" to="https://www.instagram.com/revesdevoyages_bruz/?hl=fr">Instagram</a></li>
              <li><a target="_blank" to="https://www.facebook.com/revesdevoyages/">Facebook</a></li>
            </ul>
            <ul>
              <h3>Événements</h3>
              {events.map((event, i) => (
                <li key={`${i}-${event._id}`}><Link to={`/evenement/${event.slug.current}`}>{event.type}</Link></li>
              ))}
            </ul>
            <ul>
              <h3>Destinations</h3>
              {destinations.map((des, i) => (
                <li key={`${i}-${des._id}`}><Link to={`/destination/${des.slug.current}`}>{des.type}</Link></li>
              ))}
            </ul>
            <ul>
              <h3>Plan du site</h3>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/evenement/seminaires">Événements</Link></li>
              <li><Link to="/destination/france">Destinations</Link></li>
              <li><Link to="/qui-sommes-nous">À propos</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
        </DivFooterStyles>
      </SectionFooterStyles>
       <p style={{ fontWeight: '100', fontSize: '0.8em' }}className='center'>&copy; Rêves d'Événements {new Date().getFullYear()}</p>
    </>
  );
}
