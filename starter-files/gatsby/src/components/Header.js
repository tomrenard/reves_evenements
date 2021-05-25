import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Bloc1Styles = styled.div`
  margin-top: 5em;;
  padding: 1em;
  text-align: center;
  background-color: var(--gold);
  h1 {
    font-size: 4.5em;
    font-weight: 800;
    margin-bottom: 0;
    }
  p {
    font-weight: 100;
    }
`;

export default function Header() {
  const data = useStaticQuery(graphql`query Header {
    allSanityHomePage {
      nodes {
        title1
        text1
        image1 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`)
  const content = data.allSanityHomePage.nodes[0];
  return (
    <Bloc1Styles>
      <h1>{content.title1}</h1>
      <p>{content.text1}</p>
      <button className="contact-button">Obtenir un devis</button>
    </Bloc1Styles>
  );
}
