import React from 'react';
import { graphql } from 'gatsby';
import ContactForm from '../components/ContactForm';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Link } from 'gatsby';
import SimpleSlider from '../components/SimpleSlider';


const Bloc1Styles = styled.div`
  display: grid;
  padding: 0 1em;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  margin-top: 2em;
  .bloc1-left {
    padding-top: 2em;
  }
`;

export default function HomePage({ data }) {
  const content = data.allSanityHomePage.nodes[0];
  return (
    <>
      <Bloc1Styles>
        <div className="bloc1-left">
          <h1>{content.title1}</h1>
          <p>{content.text1}</p>
          <button className="contact-button">Obtenir un devis</button>
        </div>
        <Img fluid={content.image1.asset.fluid} alt={content.title1} />
      </Bloc1Styles>
      <SimpleSlider/>
      <ContactForm />
    </>
  );
}

export const query = graphql`
  query HomePageContent {
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
        title2
        event1
        imagelastevent1 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
