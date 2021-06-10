import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import { Link } from 'gatsby';

const SectionHeaderStyles = styled.section`
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 5em;
  padding: 0px 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  @media (max-width: 900px) {
    padding: 0px 24px;
  }
`;

const DivHeaderStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 60px;
  max-width: 1200px;
  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

const DivLeftHeader = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: auto;
  text-align: left;
  margin-right: 2.5em;
  min-width: 450px;
  h1 {
    font-size: 5em;
    font-weight: 900;
    line-height: 1;
    letter-spacing: -0.01em;
    @media (max-width: 700px) {
    font-size: 3.5em;
    }
  }
  a {
    align-self: center;
  }
  p {
    font-size: 1.1em;
    line-height: 1.8;
    font-weight: 150;
  }
  span {
    color: var(--gold);
  }
`;

const DivRightHeader = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 900px) {
    margin-top: 2em;
  }
`;

export default function Header() {
  const data = useStaticQuery(graphql`query Header {
    allSanityHomePage {
      nodes {
        title1
        text1
        image1 {
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
    <SectionHeaderStyles>
      <DivHeaderStyles>
        <DivLeftHeader>
          <h1>{content.title1} <span><Typewriter
          options={{
          strings: ['sur-mesure', 'personnalisés', 'de A à Z'],
          autoStart: true,
          loop: true,
          }}/>
          </span></h1>
          <p>{content.text1}</p>
          <Link to="/contact"><button className="contact-button">Obtenir un devis</button></Link>
        </DivLeftHeader>
        <DivRightHeader>
          <Img fluid={content.image1.asset.fluid} alt={content.title1} />
        </DivRightHeader>
      </DivHeaderStyles>
    </SectionHeaderStyles>
  );
}
