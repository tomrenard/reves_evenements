import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

export default function EventsGammes() {
  const data = useStaticQuery(graphql`query Gammes {
    allSanityHomePage {
      nodes {
        title2
        event1
        event2
        event3
        imagelastevent1 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
        imagelastevent2 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
        imagelastevent3 {
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
  <p>Events gammes</p>
  );
}
