import React from 'react';
import styled from 'styled-components';

const SectionHowItWorksStyles = styled.section`
  display: flex;
  justify-content: center;
  padding: 40px 40px;
`;

const DivHowItWorksStyles = styled.div`
  max-width: 1038px;
  width: 100%;
`;

const HowItWorksStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 100%;
  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

const ContainerHowItWorksStyles = styled.div`
  display: flex;
  padding-right: 10px;
  span {
    margin-right: 8px;
    font-size: 1.3em;
    color: var(--gold);
  }
`;

const ContentHowItWorksStyles = styled.div`
  display: flex;
  flex-direction: column;
  h5 {
    font-size: 1.3em;
    font-weight: 500;
    @media (max-width: 700px) {
      margin-inline: 0;
    }
  }
  p {
    font-weight: 100;
  }
`;

export default function HowItWorks() {
  return (
    <SectionHowItWorksStyles>
      <DivHowItWorksStyles>
        <HowItWorksStyles>
            <ContainerHowItWorksStyles>
              <span>1.</span>
              <ContentHowItWorksStyles>
                <h5>Définissons ensemble vos attentes et vos besoins</h5>
                <p>Cliquez sur le bouton "Nous Contacter", remplissez les champs du formulaire et obtenez un devis en moins de 48h !</p>
              </ContentHowItWorksStyles>
            </ContainerHowItWorksStyles>
            <ContainerHowItWorksStyles>
              <span>2.</span>
              <ContentHowItWorksStyles>
                <h5>Planifions et organisons votre événement sur-mesure</h5>
                <p>Sélectionnons ensemble les prestations de votre événement et mettons en place l'événement qui vous convient grâce à nos différents partenaires et fournisseurs.</p>
              </ContentHowItWorksStyles>
            </ContainerHowItWorksStyles>
            <ContainerHowItWorksStyles>
              <span>3.</span>
              <ContentHowItWorksStyles>
                <h5>Soyez assuré que tout se passe comme prévu !</h5>
                <p>Nous vous encadrons jusqu'au jour J pour vous garantir une organisation parfaite de votre événement.</p>
              </ContentHowItWorksStyles>
            </ContainerHowItWorksStyles>
        </HowItWorksStyles>
      </DivHowItWorksStyles>
    </SectionHowItWorksStyles>
  );
}
