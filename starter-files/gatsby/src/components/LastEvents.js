import React from 'react';
import SimpleSlider from './SimpleSlider';
import styled from 'styled-components';

const SectionLastEventsStyles = styled.section`
  display: flex;
  justify-content: center;
  padding: 0px 40px;
`;

const DivLastEventsStyles = styled.div`
  max-width: 1200px;
  padding: 40px 0;
  width: 100%;
`;

const HeadingLastEventStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 60px;
  h2 {
    font-size: 3em;
  }
  h6 {
    font-size: 0.9em;
    font-weight: 600;
    text-align: center;
    color: rgb(102, 102, 102);
  }
`;

export default function LastEvents() {
  return(
    <SectionLastEventsStyles>
      <DivLastEventsStyles>
        <HeadingLastEventStyles>
          <h6>{("Rêves d'événements").toUpperCase()}</h6>
          <h2>Découvrir nos derniers événements</h2>
        </HeadingLastEventStyles>
        <SimpleSlider />
      </DivLastEventsStyles>
    </SectionLastEventsStyles>
  );
}
