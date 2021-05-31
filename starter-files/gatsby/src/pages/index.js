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
  const events = data.events.nodes;
  return (
    <>
      <Header />
      <BlocLogoCustomers />
      <LastEvents/>
      <EventsGammes events={events} />
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
    events: allSanityEvent {
      nodes {
        type
      }
    }
  }
`;
