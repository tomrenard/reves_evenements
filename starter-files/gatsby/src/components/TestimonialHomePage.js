import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { AiOutlineArrowRight } from 'react-icons/ai';

const SectionTestimonialHomePageStyles = styled.section`
  display: flex;
  justify-content: center;
  padding: 0px 40px;
`;

const DivTestimonialHomePageStyles = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 60px 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const ContainerImgTestimonialHomePageStyles = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 40px;
  overflow: hidden;
  max-width: 390px;
`;

const ContentTestimonialHomePageStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 64px;
  h6 {
    font-size: 0.8em;
    text-transform: uppercase;
    color: rgb(102, 102, 102);
  }
  h4 {
    font-size: 1.9em;
  }
  p {
    font-weight: 600;
    font-size: 1.3em;
    margin-bottom: 6px;
    color: rgb(0, 71, 150);
  }
`;

const LinkTestimonialHomePageStyles = styled.div`
  width: 100%;
  height: 100%;
  a {
    font-size: 0.9em;
  }
  button {
    font-size: 0.8em;
    border-radius: 50%;
    height: 24px;
    text-align: center;
    padding: 0 6px;
    margin: 6px 8px;
    &:hover {
      border-radius: 10px;
    }
  }

`;

export default function TestimonialHomePage() {
  const data = useStaticQuery(graphql`query TestimonialHomePage {
    allSanityHomePage {
      nodes {
        testi1
        authortesti1
        imagetesti1 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`)
  const content = data.allSanityHomePage.nodes[0];
  return (
    <SectionTestimonialHomePageStyles>
      <DivTestimonialHomePageStyles>
        <ContainerImgTestimonialHomePageStyles>
          <Img fluid={content.imagetesti1.asset.fluid} alt={content.authortesti1} />
        </ContainerImgTestimonialHomePageStyles>
        <ContentTestimonialHomePageStyles>
          <h6>Cogent Data</h6>
          <h4>"{content.testi1}"</h4>
          <p>{content.authortesti1}</p>
          <LinkTestimonialHomePageStyles>
            <a href="/">Découvrir nos prestations</a>
            <button href="/"><AiOutlineArrowRight /></button>
          </LinkTestimonialHomePageStyles>
        </ContentTestimonialHomePageStyles>
      </DivTestimonialHomePageStyles>
    </SectionTestimonialHomePageStyles>
  );
}
