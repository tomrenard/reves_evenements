import React from 'react';
import { graphql } from 'gatsby';
import ContactForm from '../components/ContactForm';
import Img from 'gatsby-image/withIEPolyfill';
import styled from 'styled-components';
import { Link } from 'gatsby';
import SimpleSlider from '../components/SimpleSlider';
import EventsGammes from '../components/EventsGammes';
import TestimonialHomePage from '../components/TestimonialHomePage';

const Bloc1Styles = styled.div`
  padding: 0 1em;
  max-width: 50em;
  margin: 0 auto;
  margin-bottom: 3em;
  text-align: center;
  h1 {
    font-size: 4.5em;
    font-weight: 800;
    margin-bottom: 0;
    }
  p {
    font-weight: 100;
    }
`;

const Section2Styles = styled.section`
  background-color: rgb(251, 251, 251);
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  padding: 2em 40px;
`;

const BlocCstStyles = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  h3 {
    font-size: 1.5rem;
    line-height: 1.25;
    text-align: center;
    color: rgb(0, 0, 0);
    font-weight: 400;
    margin-bottom: 16px;
    max-width: 560px;
  }
span {
  line-height: 1.25;
  font-weight: 900;
  color: var(--gold);
}
`;

const LogoListStyles = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-left: -16px;
  margin-right: -16px;
  opacity: 0.4;
  .gatsby-image-wrapper {
    min-width: 100px;
    max-width: 100px;
    max-height: 64px;
    display: block;
    align-self: center;
  }
  .logocst {
    display: flex;
    min-width: 100px;
    max-width: 100px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
  }
  Img {
    align-self: center !important;
    display: block !important;
    width: 100% !important;
    height: auto;
  }
`;

const Bloc2Styles = styled.div`
  width: 100%;
  padding-bottom: 2em;
  text-align: center;
  h2 {
    font-size: 2.5em;
    font-weight: 900;
    margin: 0.2em 0;
  }
`;

export default function HomePage({ data }) {
  const content = data.allSanityHomePage.nodes[0];
  return (
    <>
      <Bloc1Styles>
          <h1>{content.title1}</h1>
          <p>{content.text1}</p>
          <button className="contact-button">Obtenir un devis</button>
      </Bloc1Styles>
      <Section2Styles>
      <BlocCstStyles>
        <h3>Des événements professionnels organisés pour plus de <span>10 000</span> participants depuis 2009</h3>
        <LogoListStyles>
          <div className='logocst'>
            <Img objectFit='contain' fluid={content.logocst1.asset.fluid} alt='logo1' />
          </div>
          <div className='logocst'>
            <Img objectFit='contain' fluid={content.logocst2.asset.fluid} alt='logo2' />
          </div>
          <div className='logocst'>
            <Img objectFit='contain' fluid={content.logocst3.asset.fluid} alt='logo3' />
          </div>
          <div className='logocst'>
            <Img objectFit='contain' fluid={content.logocst4.asset.fluid} alt='logo4' />
          </div>
          <div className='logocst'>
          <Img objectFit='contain' fluid={content.logocst5.asset.fluid} alt='logo5' />
          </div>
          <div className='logocst'>
          <Img objectFit='contain' fluid={content.logocst6.asset.fluid} alt='logo6' />
           </div>
        </LogoListStyles>
      </BlocCstStyles>
      </Section2Styles>
      <Bloc2Styles>
        <h2>{content.title2}</h2>
        <SimpleSlider/>
      </Bloc2Styles>
      <EventsGammes />
      <TestimonialHomePage />
      <ContactForm />
    </>
  );
}

export const query = graphql`
  query HomePageContent {
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
        title2
        event1
        imagelastevent1 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
        logocst1 {
          asset {
            fluid(maxWidth: 120) {
              ...GatsbySanityImageFluid
            }
          }
        }
        logocst2 {
          asset {
            fluid(maxWidth: 120) {
              ...GatsbySanityImageFluid
            }
          }
        }
        logocst3 {
          asset {
            fluid(maxWidth: 120) {
              ...GatsbySanityImageFluid
            }
          }
        }
        logocst4 {
          asset {
            fluid(maxWidth: 120) {
              ...GatsbySanityImageFluid
            }
          }
        }
        logocst5 {
          asset {
            fluid(maxWidth: 120) {
              ...GatsbySanityImageFluid
            }
          }
        }
        logocst6 {
          asset {
            fluid(maxWidth: 120) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
