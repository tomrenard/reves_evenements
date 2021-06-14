import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';


const SectionHistoryAboutStyles = styled.section`
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  padding: 0px 40px;
`;

const DivHistoryAboutStyles = styled.div`
  padding-bottom: 60px;
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const DivRightHistoryAboutStyles = styled.div`
  width: 100%;
  max-width: 40%;
  height: 100%;
  @media (max-width: 900px) {
    max-width: 80%;
  }
 `;


 const DivLeftHistoryAboutStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 45%;
  width: 100%;
  height: 100%;
  margin-right: 56px;
  @media (max-width: 900px) {
    max-width: 80%;
    order: 2;
  }
  h3 {
    margin: 0;
    font-size: 2.3em;
  }
  p {
    margin-top: 24px;
    text-align: left;
    font-weight: 100;
    line-height: 1.5;
  }
`;

export default function HistoryAbout({ aboutUs }) {
  return (
    <SectionHistoryAboutStyles>
      <DivHistoryAboutStyles>
        <DivLeftHistoryAboutStyles>
          <h3>
            {aboutUs.titlebloc2}
          </h3>
          <p>
            {aboutUs.content2}
          </p>
        </DivLeftHistoryAboutStyles>
        <DivRightHistoryAboutStyles>
          <Img fluid={aboutUs.imagebloc2.asset.fluid} alt={aboutUs.titlebloc2} />
        </DivRightHistoryAboutStyles>
      </DivHistoryAboutStyles>
    </SectionHistoryAboutStyles>
  );
}
