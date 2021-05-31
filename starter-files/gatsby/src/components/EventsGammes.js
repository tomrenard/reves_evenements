import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const SectionGammesStyles = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 40px;
`;

const DivGammesStyles = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const DivHeaderGammesStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  h3 {
    margin: 0;
  }
`;


export default function EventsGammes({ events }) {
  return (
    <SectionGammesStyles>
      <DivGammesStyles>
        <DivHeaderGammesStyles>
          <h6>Gamme d'événements</h6>
          <h3>Découvrir tous nos événements</h3>
        </DivHeaderGammesStyles>
        <div>
          <div>
            <div>

            </div>
          </div>
        </div>
      </DivGammesStyles>
    </SectionGammesStyles>
  );
}
