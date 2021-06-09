import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import HeaderEventTemplate from '../components/HeaderEventTemplate';
import Bloc1Event from '../components/Bloc1Event';
import Bloc2Event from '../components/Bloc2Event';
import Bloc3Event from '../components/Bloc3Event';
import Bloc4Event from '../components/Bloc4Event';
import Bloc5Event from '../components/Bloc5Event';
import BlocTestiEvent from '../components/BlocTestiEvent';

export default function SingleDestinationPage({ data }) {
  const destination = data.destination;
  return (
    <>
      <HeaderEventTemplate destination={destination} />
      <Bloc1Event destination={destination} />
      <Bloc2Event destination={destination} />
      {/*<Bloc3Event destination={destination} />
      <Bloc4Event destination={destination} />
      <Bloc5Event destination={destination} />
      <BlocTestiEvent destination={destination} />*/}
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    destination: sanityDestination(slug: { current: {eq: $slug} }) {
      type
      authortestidestination1
      contentdestination1
      contentdestination2
      contentdestination3
      contentdestination4
      contentdestination5
      contentdestination6
      testidestination1
      testidestinationcompany1
      titledestination1
      titledestination2h2
      titledestination2h6
      titledestination3
      titledestination3h6
      titledestination4
      titledestination4h6
      titledestination5
      titledestination5h6
      titledestination6
      titledestinationt6h6
      titletransidestination1
      type
      imagedestination1 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
      }
      imagedestination2 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
      }
      imagedestination3 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
      }
      imagedestination4 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
      }
      imagedestination5 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
      }
      imagedestination6 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
      }
      imagedestinationtesti1 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
      }
    }
  }
`;
