import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';


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
  height: 100%;
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
  padding-top: 80px;
  padding-bottom: 80px;
  max-width: 50%;
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
  max-width: 29%;
  height: 100%;
  padding: 36px;
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
