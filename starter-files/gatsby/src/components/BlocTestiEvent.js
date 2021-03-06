import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image/withIEPolyfill';

const SectionTestiEventStyles = styled.section`
  margin-top: 1em;
  background-color: black;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 40px;
  @media (max-width: 900px) {
    padding: 0;
  }
`;

const DivTestiEventStyles = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const DivLeftTestiEventStyles = styled.div`
  width: 100%;
  max-width: 16%;
  height: 100%;
  margin: 2em;
  margin-right: 8em;
  @media (max-width: 900px) {
    display: none;
  }
`;

const DivRightTestiEventStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 40%;
  width: 100%;
  height: 100%;
  @media (max-width: 900px) {
    max-width: 80%;
  }
  h6, h4, p {
    color: white;
  }
  h6 {
    text-transform: uppercase;
    font-size: 0.8em;
  }
  h4 {
    font-size: 1.6em;
    margin-bottom: 1em;
  }
  p {
    font-size: 1.1em;
    font-weight: 100;
    @media (max-width: 600px) {
      margin-bottom: 2em;
    }
  }
`;

export default function BlocTestiEvent({ event, destination }) {
  return(
    <SectionTestiEventStyles>
      { event ?
      <DivTestiEventStyles>
        <DivLeftTestiEventStyles>
          <Img fluid={event.imageeventtesti1.asset.fluid} alt={event.authortestievent1} />
        </DivLeftTestiEventStyles>
        <DivRightTestiEventStyles>
          <h6>{event.testieventcompany1}</h6>
          <h4>"{event.testievent1}"</h4>
          <p>{event.authortestievent1}</p>
        </DivRightTestiEventStyles>
      </DivTestiEventStyles>
      :
      <DivTestiEventStyles>
        <DivLeftTestiEventStyles>
          <Img fluid={destination.imagedestinationtesti1.asset.fluid} alt={destination.authortestidestination1} />
        </DivLeftTestiEventStyles>
        <DivRightTestiEventStyles>
          <h6>{destination.testidestinationcompany1}</h6>
          <h4>"{destination.testidestination1}"</h4>
          <p>{destination.authortestidestination1}</p>
        </DivRightTestiEventStyles>
      </DivTestiEventStyles>
    }
    </SectionTestiEventStyles>
  );
}
