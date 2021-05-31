import React from 'react';
import styled from 'styled-components';

const SectionHowItWorksStyles = styled.section`
  display: flex;
  justify-content: center;
  padding: 40px 40px;
`;

const DivHowItWorksStyles = styled.div`
  padding-bottom: 112px;
  max-width: 1038px;
  width: 100%;
`;

const HowItWorksStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 100%;
`;

const ContainerHowItWorksStyles = styled.div`
  display: flex;
  span {
    margin-right: 1em;
    font-size: 2em;
    color: var(--gold);
  }
`;

const ContentHowItWorksStyles = styled.div`
  diplay: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export default function HowItWorks() {
  return (
    <SectionHowItWorksStyles>
      <DivHowItWorksStyles>
        <HowItWorksStyles>
            <ContainerHowItWorksStyles>
              <span>1.</span>
              <ContentHowItWorksStyles>
                <h5>Envoyez-nous un message</h5>
                <p>Cliquez sur le bouton "Nous Contacter", remplissez les champs du formulaires et obtenez un devis en moins de 48h !</p>
              </ContentHowItWorksStyles>
            </ContainerHowItWorksStyles>
            <ContainerHowItWorksStyles>
              <span>2.</span>
              <ContentHowItWorksStyles>
                <h5>Envoyez-nous un message</h5>
                <p>Cliquez sur le bouton "Nous Contacter", remplissez les champs du formulaires et obtenez un devis en moins de 48h !</p>
              </ContentHowItWorksStyles>
            </ContainerHowItWorksStyles>
            <ContainerHowItWorksStyles>
              <span>3.</span>
              <ContentHowItWorksStyles>
                <h5>Envoyez-nous un message</h5>
                <p>Cliquez sur le bouton "Nous Contacter", remplissez les champs du formulaires et obtenez un devis en moins de 48h !</p>
              </ContentHowItWorksStyles>
            </ContainerHowItWorksStyles>
        </HowItWorksStyles>
      </DivHowItWorksStyles>
    </SectionHowItWorksStyles>
  );
}
