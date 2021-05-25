import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

const Section2Styles = styled.section`
  background-color: rgb(251, 251, 251);
  display: flex;
  justify-content: center;
  padding: 2.5em 40px;
`;

const BlocCstStyles = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  h3 {
    font-size: 1.8em;
    line-height: 1.25;
    text-align: center;
    color: rgb(0, 0, 0);
    font-weight: 500;
    margin-bottom: 24px;
    max-width: 560px;
  }
span {
  line-height: 1.25;
  font-weight: 900;
  color: var(--blue);
}
`;

const LogoListStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0.4;
  width: 100%;
  .logocst {
    width: 100px;
    height: auto;
  }
  Img {
    width: 100%;
    height: auto;
  }
`;

export default function BlocLogoCustomers() {
  const data = useStaticQuery(graphql`query BlocLogoCustomers {
    allSanityHomePage {
      nodes {
        logocst1 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
        logocst2 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
        logocst3 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
        logocst4 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
        logocst5 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
        logocst6 {
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
     <Section2Styles>
      <BlocCstStyles>
        <h3>Des événements professionnels organisés pour plus de <span>100 000</span> participants</h3>
        <LogoListStyles>
          <div className='logocst'>
            <Img fluid={content.logocst1.asset.fluid} alt='logo1' />
          </div>
          <div className='logocst'>
            <Img fluid={content.logocst3.asset.fluid} alt='logo3' />
          </div>
          <div className='logocst'>
            <Img fluid={content.logocst4.asset.fluid} alt='logo4' />
          </div>
          <div className='logocst'>
          <Img fluid={content.logocst5.asset.fluid} alt='logo5' />
          </div>
          <div className='logocst'>
          <Img fluid={content.logocst6.asset.fluid} alt='logo6' />
           </div>
        </LogoListStyles>
      </BlocCstStyles>
    </Section2Styles>
  );
}
