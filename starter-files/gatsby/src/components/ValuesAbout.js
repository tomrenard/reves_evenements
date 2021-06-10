import React from 'react';
import styled from 'styled-components';

const SectionValuesAboutStyles = styled.section`
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  padding: 0px 40px;
`;

const DivValuesAboutStyles = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  max-width: 1200px;
  width: 100%;
`;

const GridValuesAboutStyles = styled.div`
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 40px 12px;
  display: grid;
  width: 100%;
`;

const CardValuesAboutStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px;
  max-width: 290px;
  height: 100%;
  min-height: 410px;
  box-shadow: rgb(0 0 0 / 25%) 0px 3.77615px 12.2725px;
  border-radius: 32px;
  overflow: hidden;
`;

export default function ValuesAbout() {
  return(
    <SectionValuesAboutStyles>
      <DivValuesAboutStyles>
        <h2>Nos valeurs</h2>
        <GridValuesAboutStyles>

        </GridValuesAboutStyles>
      </DivValuesAboutStyles>
    </SectionValuesAboutStyles>
  );
}
