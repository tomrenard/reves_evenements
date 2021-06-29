import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';


const SectionArticleAboutStyles = styled.section`
  margin-top: 1em;
  background-color: var(--gold);
  display: flex;
  justify-content: center;
  padding: 0 40px;
  @media (max-width: 900px) {
    padding: 0 24px;
  }
`;

const DivArticleAboutStyles = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DivRightArticleAboutStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding-block: 80px;
  max-width: 60%;
  @media (max-width: 900px) {
    max-width: 100%;
    margin: 0 auto;
    padding-block: 40px;
  }
  h3 {
    font-size: 2em;
    color: white;
  }
  p {
    color: white;
    font-size: 1.1em;
    font-weight: 100;
  }
`;

const DivLeftArticleAboutStyles = styled.div`
  width: 100%;
  max-width: 28%;
  height: 100%;
  margin-top: 124px;
  @media (max-width: 900px) {
    display: none;
    width: 0;
    margin-top: 0;
  }
`;

export default function ArticleAbout({ aboutUs }) {
  return(
    <SectionArticleAboutStyles>
      <DivArticleAboutStyles>
        <DivLeftArticleAboutStyles>
          <Img fluid={aboutUs.imagebloc3.asset.fluid} alt={aboutUs.title3} />
        </DivLeftArticleAboutStyles>
        <DivRightArticleAboutStyles>
          <h3>"{aboutUs.content3}"</h3>
          <p>{aboutUs.title3}</p>
        </DivRightArticleAboutStyles>
      </DivArticleAboutStyles>
    </SectionArticleAboutStyles>
  );
}
