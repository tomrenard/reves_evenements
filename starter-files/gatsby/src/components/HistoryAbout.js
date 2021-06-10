import React from 'react';
import styled from 'styled-components';

const SectionHistoryAboutStyles = styled.section`
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  padding: 0px 40px;
`;

const DivHistoryAboutStyles = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const DivRightHistoryAboutStyles = styled.div`
  width: 100%;
  max-width: 49%;
  height: 100%;
 `;


 const DivLeftHistoryAboutStyles = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 45%;
  width: 100%;
  height: 100%;
  h3 {
    margin: 0;
    font-size: 2.3em;
  }
  p {
    margin-top: 24px;
    text-align: left;
    font-weight: 100;
  }
`;

export default function HistoryAbout() {
  return (
    <SectionHistoryAboutStyles>
      <DivHistoryAboutStyles>
        <DivLeftHistoryAboutStyles>
          <h3>
            Hard-working technology born from hard work
          </h3>
          <p>
            Tope Awotona founded Calendly in 2013 through sheer grit, perseverance, and the complete and utter emptying of his personal savings accounts. With everything on the line, he turned his vision of simple scheduling for everyone into a vibrant, growing platform that manages scheduling for more than 9 million individuals and businesses.
          </p>
        </DivLeftHistoryAboutStyles>
        <DivRightHistoryAboutStyles>
          <p>pic</p>
        </DivRightHistoryAboutStyles>
      </DivHistoryAboutStyles>
    </SectionHistoryAboutStyles>
  );
}
