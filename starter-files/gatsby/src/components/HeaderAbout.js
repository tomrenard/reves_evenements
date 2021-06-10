import React from 'react';
import styled from 'styled-components';

const SectionHeaderAboutStyles = styled.section`
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  padding: 0px 40px;
`;

const DivHeaderAboutStyles = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  max-width: 1200px;
  width: 100%;
`;

const DivFlexHeaderAboutStyles = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h6 {
    text-transform: uppercase;
    font-size: 0.9em;
    font-weight: 600;
    color: rgb(102, 102, 102);
    text-align: center;
  }
  h1 {
    font-size: 5em;
    text-align: center;
    font-weight: 900;
    line-height: 1;
    letter-spacing: -0.01em;
    @media (max-width: 700px) {
    font-size: 3.5em;
    }
  }
  p {
    max-width: 700px;
    margin-top: 48px;
    text-align: center;
    font-weight: 100;
  }
  span {
    color: var(--gold);
  }
`;

export default function HeaderAbout() {
  return (
    <SectionHeaderAboutStyles>
      <DivHeaderAboutStyles>
        <DivFlexHeaderAboutStyles>
          <h6>ABOUT US</h6>
          <h1>We bring people <span>together</span>. You make the <span>magic</span> happen.</h1>
          <p>Calendly takes the busywork of scheduling off your to-do list so you can get more done. Thousands of teams across the globe use Calendly to make millions of 1-click meetings every week. Coordinate, connect, and nurture relationships all in one meeting lifecycle platform.</p>
        </DivFlexHeaderAboutStyles>
      </DivHeaderAboutStyles>
    </SectionHeaderAboutStyles>
  );
}
