import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image/withIEPolyfill';
import { Link } from 'gatsby';

const SectionHeaderEventStyles = styled.section`
  display: flex;
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: center;
  padding: 0 40px;
  margin-top: 5em;
  @media (max-width: 900px) {
    padding: 0px 24px;
    margin-top: 2em;
  }
`;

const DivHeaderEventStyles = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 60px;
  padding-bottom: 60px;
  max-width: 1200px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const DivRightHeader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 45%;
  padding-top: 1.5em;
  @media (max-width: 900px) {
    order: 1;
    max-width: 100%;
    margin: 1em auto;
  }
  h1 {
    font-size: 4.5em;
    font-weight: 900;
    line-height: 1;
    letter-spacing: -0.01em;
    @media (max-width: 1050px) {
    font-size: 3em;
    }
    @media (max-width: 900px) {
    text-align: center;
    }
  }
  a {
    align-self: center;
  }
  p {
    font-size: 1em;
    line-height: 1.8;
    font-weight: 150;
  }
  span {
    color: var(--gold);
  }
`;

const DivLeftHeader = styled.div`
  width: 100%;
  max-width: 45%;
  height: 100%;
  @media (max-width: 900px) {
    order: 2;
    max-width: 60%;
    margin: 1em auto;
  }
`;

export default function HeaderEventTemplate({ event, destination }) {
  return(
    <SectionHeaderEventStyles>
    { event ?
      <DivHeaderEventStyles>
        <DivLeftHeader>
          <Img fluid={event.imageevent1.asset.fluid} alt={event.titleevent1} />
        </DivLeftHeader>
        <DivRightHeader>
          <h1>{event.titleevent1} <span>{event.spanheader}</span></h1>
          <p>{event.contentevent1}</p>
          <Link to="/contact"><button className="contact-button">Obtenir un devis</button></Link>
        </DivRightHeader>
      </DivHeaderEventStyles>
      :
      <DivHeaderEventStyles>
        <DivLeftHeader>
          <Img fluid={destination.imagedestination1.asset.fluid} alt={destination.titledestination1} />
        </DivLeftHeader>
        <DivRightHeader>
          <h1>{destination.titledestination1} <span>{destination.spanheader1}</span></h1>
          <p>{destination.contentdestination1}</p>
          <Link to="/contact"><button className="contact-button">Obtenir un devis</button></Link>
        </DivRightHeader>
      </DivHeaderEventStyles>
    }
    </SectionHeaderEventStyles>
  );
}
