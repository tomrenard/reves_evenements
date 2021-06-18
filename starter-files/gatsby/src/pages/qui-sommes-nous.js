import React from 'react';
import HeaderAbout from '../components/HeaderAbout';
import HistoryAbout from '../components/HistoryAbout';
import ArticleAbout from '../components/ArticleAbout';
import ValuesAbout from '../components/ValuesAbout';
import ContactForm from '../components/ContactForm';
import { graphql } from 'gatsby';


export default function About({ data }) {
  const aboutUs = data.aboutus.nodes[0];
  const values = data.values.nodes;
  return (
    <>
      <HeaderAbout aboutUs={aboutUs} />
      <HistoryAbout aboutUs={aboutUs} />
      <ArticleAbout aboutUs={aboutUs} />
      <ValuesAbout values={values} />
      <ContactForm />
    </>
  );
}


export const query = graphql`
  query {
    values: allSanityValue {
      nodes {
        _id
        titlevalue
        contentvalue
        imagebloc2 {
          asset {
            fixed(width: 200, height: 200) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    aboutus: allSanityAboutUs {
      nodes {
        title1
        titlebloc2
        title3
        content1
        content2
        content3
        imagebloc2 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
        imagebloc3 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
