import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const TestimonialHomePageStyles = styled.div`
  display: grid;
  background: #C7B9FF;
  padding: 2em 1em;
  grid-template-columns: 1fr 2fr;
  .img-testi1 {
    width: 200px;
    height: 200px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto;
  }
  .content-testi1 {
    margin: auto auto;
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
    <TestimonialHomePageStyles>
      <div className="img-testi1">
        <Img fluid={content.imagetesti1.asset.fluid} alt={content.authortesti1} />
      </div>
      <div className="content-testi1">
        <p>{content.testi1}</p>
        <p>{content.authortesti1}</p>
      </div>
    </TestimonialHomePageStyles>
  );
}
