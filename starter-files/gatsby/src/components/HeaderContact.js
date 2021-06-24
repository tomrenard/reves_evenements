import React from 'react';
import styled from 'styled-components';

const SectionHeaderContactStyles = styled.section`
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  padding: 0px 40px;
`;

const DivHeaderContactStyles = styled.div`
  padding-top: 120px;
  padding-bottom: 60px;
  max-width: 1200px;
  width: 100%;
  @media (max-width: 700px) {
    padding-block: 36px;
  }
`;

const DivFlexHeaderContactStyles = styled.div`
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
    font-size: 3.2em;
    }
  }
  p {
    max-width: 700px;
    margin-top: 48px;
    text-align: center;
    font-weight: 100;
    line-height: 1.5;
  }
  span {
    color: var(--gold);
  }
`;

export default function HeaderContact() {
  return (
    <SectionHeaderContactStyles>
      <DivHeaderContactStyles>
        <DivFlexHeaderContactStyles>
          <h6>Comment nous contacter ?</h6>
          <h1>Contactez-nous et obtenez un devis <span>en moins de 48h</span> !</h1>
          <p>Nous sommes joignable au 06XXXXXXXX, par mail xxx@example.com ou vous pouvez remplir le formulaire ci-dessous.</p>
        </DivFlexHeaderContactStyles>
      </DivHeaderContactStyles>
    </SectionHeaderContactStyles>
  );
}
