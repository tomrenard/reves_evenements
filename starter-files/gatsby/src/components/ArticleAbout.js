import React from 'react';
import styled from 'styled-components';

const SectionArticleAboutStyles = styled.section`
  margin-top: 1em;
  background-color: var(--gold);
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 40px;
`;

const DivArticleAboutStyles = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DivLeftArticleAboutStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 80px;
  padding-bottom: 80px;
  max-width: 50%;
  h2 {
    font-size: 3.5em;
    color: white;
  }
`;

const DivRightArticleAboutStyles = styled.div`
  width: 100%;
  max-width: 49%;
  height: 100%;
`;

export default function ArticleAbout() {
  return(
    <SectionArticleAboutStyles>
      <DivArticleAboutStyles>
        <DivLeftArticleAboutStyles>
          <h2>L’agence Rêves d'Événements offre du sur-mesure</h2>
        </DivLeftArticleAboutStyles>
        <DivRightArticleAboutStyles>
          <p>pic</p>
        </DivRightArticleAboutStyles>
      </DivArticleAboutStyles>
    </SectionArticleAboutStyles>
  );
}
