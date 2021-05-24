import React from 'react';
import { graphql } from 'gatsby';
import ContactForm from '../components/ContactForm';
import Img from 'gatsby-image/withIEPolyfill';
import styled from 'styled-components';
import { Link } from 'gatsby';
import SimpleSlider from '../components/SimpleSlider';
import EventsGammes from '../components/EventsGammes';
import BlocLogoCustomers from '../components/BlocLogoCustomers';
import TestimonialHomePage from '../components/TestimonialHomePage';

const Bloc1Styles = styled.div`
  padding: 0 1em;
  max-width: 50em;
  margin: 0 auto;
  margin-bottom: 3em;
  text-align: center;
  h1 {
    font-size: 4.5em;
    font-weight: 800;
    margin-bottom: 0;
    }
  p {
    font-weight: 100;
    }
`;

const Bloc2Styles = styled.div`
  width: 100%;
  padding-bottom: 2em;
  text-align: center;
  h2 {
    font-size: 2.5em;
    font-weight: 900;
    margin: 0.2em 0;
  }
`;

export default function HomePage({ data }) {
  const content = data.allSanityHomePage.nodes[0];
  return (
    <>
      <Bloc1Styles>
          <h1>{content.title1}</h1>
          <p>{content.text1}</p>
          <button className="contact-button">Obtenir un devis</button>
      </Bloc1Styles>
      <BlocLogoCustomers />
      <Bloc2Styles>
        <SimpleSlider/>
      </Bloc2Styles>
      <EventsGammes />
      <TestimonialHomePage />
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
