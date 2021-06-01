import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image/withIEPolyfill';

const SectionHeaderEventStyles = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 40px;
`;

const DivHeaderEventStyles = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 60px;
  max-width: 1200px;
`;

const DivRightHeader = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: auto;
  text-align: left;
  margin-right: 2.5em;
  min-width: 450px;
  h1 {
    font-size: 5em;
    font-weight: 900;
    line-height: 1;
    letter-spacing: -0.01em;
  }
  button {
    align-self: center;
  }
  p {
    font-size: 1.1em;
    line-height: 1.8;
    font-weight: 150;
  }
  span {
    color: var(--gold);
  }
`;

const DivLeftHeader = styled.div`
  width: 100%;
  height: 100%;
`;

export default function HeaderEventTemplate({ event }) {
  return(
    <SectionHeaderEventStyles>
      <DivHeaderEventStyles>
        <DivLeftHeader>
          <Img fluid={event.imageevent1.asset.fluid} alt={event.titleevent1} />
        </DivLeftHeader>
        <DivRightHeader>
          <h1>{event.titleevent1}</h1>
          <p>{event.contentevent1}</p>
          <button className="contact-button">Obtenir un devis</button>
        </DivRightHeader>
      </DivHeaderEventStyles>
    </SectionHeaderEventStyles>

  );
}
