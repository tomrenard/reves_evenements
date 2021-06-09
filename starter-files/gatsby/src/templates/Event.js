import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image/withIEPolyfill';
import HeaderEventTemplate from '../components/HeaderEventTemplate';
import Bloc1Event from '../components/Bloc1Event';
import Bloc2Event from '../components/Bloc2Event';
import Bloc3Event from '../components/Bloc3Event';
import Bloc4Event from '../components/Bloc4Event';
import Bloc5Event from '../components/Bloc5Event';
import BlocTestiEvent from '../components/BlocTestiEvent';
import ContactForm from '../components/ContactForm';
import EventsGammes from '../components/EventsGammes';

export default function SingleEventPage({ data }) {
  const event = data.event;
  const catEvents = data.catEvents.nodes;
  const events = data.events.nodes;
  return (
    <>
      <HeaderEventTemplate event={event} />
      <Bloc1Event event={event} />
      <Bloc2Event event={event} />
      <Bloc3Event event={event} />
      <Bloc4Event event={event} />
      <Bloc5Event event={event} />
      <BlocTestiEvent event={event} />
      <EventsGammes event={event} catEvents={catEvents} events={events} />
      <ContactForm />
    </>
  );
}

export const query1 = graphql`
  query($slug: String!) {
    event: sanityEvent(slug: { current: {eq: $slug} }) {
      authortestievent1
      contentevent1
      contentevent2
      contentevent3
      contentevent4
      contentevent5
      contentevent6
      testievent1
      testieventcompany1
      titleevent1
      titleevent2h2
      titleevent2h6
      titleevent3
      titleevent3h6
      titleevent4
      titleevent4h6
      titleevent5
      titleevent5h6
      titleevent6
      titleevent6h6
      titletransi1
      type
      imageevent1 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
      }
      imageevent2 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
      }
      imageevent3 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
      }
      imageevent4 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
      }
      imageevent5 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
      }
      imageevent6 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
      }
      imageeventtesti1 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
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
