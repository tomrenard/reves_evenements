import React, { useState } from 'react';
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
  overflow: hidden;
  border-radius: 40px;
  max-width: 390px;
  max-height: 390px;
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
    font-size: 1.8em;
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

const SelectorDivStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  top: 100px;

`;

const SelectorStyles = styled.div`
  position: relative;
  width: 30px;
  height: 20px;
  cursor: pointer;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  top: -90px;
  margin-right: 14px;
  left: -10px;
  background-color: lightgray;
  &.active {
    background-color: blue;
  }
`;

export default function TestimonialHomePage( { testimonials }) {
  const [selectorClicked, setSelectorClicked] = useState(
    {
      selector1: true,
      selector2: false
    }
  );
  const testimonialsFiltered1 = testimonials.filter(testimonial => testimonial.company === 'Cogent Data');
  const testimonialsFiltered2 = testimonials.filter(testimonial => testimonial.company === 'Cipher Publishing');
  const [testiFiltered, setTestiFiltered] = useState(testimonialsFiltered1);
  function SetTesti1() {
    setTestiFiltered(testimonialsFiltered2);
  }
  function SetTesti2() {
    setTestiFiltered(testimonialsFiltered1);
  }
  function SetSelec() {
    setSelectorClicked({selector1: !selectorClicked.selector1, selector2: !selectorClicked.selector2});
  }
  return (
    <>
      {testiFiltered.map(testimonial => (
      <div key={testimonial._id}>
        <SectionTestimonialHomePageStyles>
          <DivTestimonialHomePageStyles>
            <ContainerImgTestimonialHomePageStyles>
              <Img fluid={testimonial.imagetestimonial.asset.fluid} alt={testimonial.author} />
            </ContainerImgTestimonialHomePageStyles>
            <ContentTestimonialHomePageStyles>
              <h6>{testimonial.company}</h6>
              <h4>"{testimonial.content}"</h4>
              <p>{testimonial.author}</p>
              <LinkTestimonialHomePageStyles>
                <a href="/">Découvrir nos prestations</a>
                <button href="/"><AiOutlineArrowRight /></button>
              </LinkTestimonialHomePageStyles>
            </ContentTestimonialHomePageStyles>
          </DivTestimonialHomePageStyles>
        </SectionTestimonialHomePageStyles>
        <SelectorDivStyles>
          <SelectorStyles onClick={() => { SetTesti2(); SetSelec(); }} className={selectorClicked.selector1 ? 'active' : ''}>
          </SelectorStyles>
          <SelectorStyles onClick={() => { SetTesti1(); SetSelec(); }} className={selectorClicked.selector2 ? 'active' : ''}>
          </SelectorStyles>
        </SelectorDivStyles>
      </div>
      ))}
    </>
  );
}
