import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';


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
  h2 {
    font-size: 2.5em;
    margin-bottom: 2em;
  }
`;

const GridValuesAboutStyles = styled.div`
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 88px 12px;
  display: grid;
  width: 100%;
`;

const CardValuesAboutStyles = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 8px;
  flex-direction: column;
  margin-top: 1em;
  max-width: 260px;
  height: 100%;
  min-height: 410px;
  border-radius: 32px;
  text-align: center;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  .container-img-value {
    width: 100%;
  }
  h3 {
    color: var(--gold);
    font-size: 1.7em;
    margin-top: 0.5em;
  }
  p {
    font-weight: 100;
    margin: 0;
    padding-left: 0.6em;
    line-height: 1.8;
    text-align: left;
  }
`;

export default function ValuesAbout({ values }) {
  return(
    <SectionValuesAboutStyles>
      <DivValuesAboutStyles>
        <h2>Nos valeurs</h2>
        <GridValuesAboutStyles>
          {values.map(value => (
            <CardValuesAboutStyles key={value._id}>
              <h3>{value.titlevalue}</h3>
              <div className="container-img-value">
                <Img fixed={value.imagebloc2.asset.fixed} alt={value.titlevalue} />
              </div>
              <p>{value.contentvalue}</p>
            </CardValuesAboutStyles>
          ))}
        </GridValuesAboutStyles>
      </DivValuesAboutStyles>
    </SectionValuesAboutStyles>
  );
}
