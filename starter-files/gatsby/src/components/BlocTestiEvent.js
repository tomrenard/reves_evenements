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
`;

const DivRightTestiEventStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 40%;
  width: 100%;
  height: 100%;
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
  }
`;

export default function BlocTestiEvent({ event }) {
  return(
    <SectionTestiEventStyles>
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
    </SectionTestiEventStyles>
  );
}
