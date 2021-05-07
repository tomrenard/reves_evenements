import React from 'react';
import { graphql } from 'gatsby';

export default function HomePage({ data }) {
  return (
    <div>
      <p>{data.allSanityHomePage.nodes[0].title1}</p>
    </div>
  );
}

export const query = graphql`
  query HomePageContent {
    allSanityHomePage {
      nodes {
        title1
      }
    }
  }
`;
