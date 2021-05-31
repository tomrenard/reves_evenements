import React from 'react';
import { graphql } from 'gatsby';
import ContactForm from '../components/ContactForm';
import Img from 'gatsby-image/withIEPolyfill';
import styled from 'styled-components';
import { Link } from 'gatsby';
import LastEvents from '../components/LastEvents';
import Header from '../components/Header';
import EventsGammes from '../components/EventsGammes';
import BlocLogoCustomers from '../components/BlocLogoCustomers';
import TestimonialHomePage from '../components/TestimonialHomePage';

export default function HomePage({ data }) {
  const testimonials = data.testimonials.nodes;
  const content = data.homepage.nodes[0];
  return (
    <>
      <Header />
      <BlocLogoCustomers />
      <LastEvents/>
      <EventsGammes content={content} />
      <TestimonialHomePage testimonials={testimonials} />
      <ContactForm />
    </>
  );
}

export const query = graphql`
  query {
    testimonials: allSanityTestimonial {
      nodes {
        _id
        author
        company
        content
        imagetestimonial {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    homepage: allSanityHomePage {
      nodes {
        title3
        typeevent1
        typeevent2
        typeevent3
        typeevent4
        contentevent1
        contentevent2
        contentevent3
        contentevent4
      }
    }
  }
`;
