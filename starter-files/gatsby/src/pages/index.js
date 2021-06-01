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
import HowItWorks from '../components/HowItWorks';


export default function HomePage({ data }) {
  const testimonials = data.testimonials.nodes;
  const catEvents = data.catEvents.nodes;
  const events = data.events.nodes;
  return (
    <>
      <Header />
      <BlocLogoCustomers />
      <LastEvents/>
      <HowItWorks />
      <EventsGammes catEvents={catEvents} events={events} />
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
    catEvents: allSanityEvent {
      nodes {
        type
        slug {
          current
        }
        _id
        iconevent1 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    events: allSanityEventcategory {
      nodes {
        typeevents {
          type
        }
        contentevent
        type
        _id
        imageevent {
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
