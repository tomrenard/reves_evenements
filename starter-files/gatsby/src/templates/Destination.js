import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const Sectiontest = styled.section`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  p {
    color: black;
    font-size: 120px;
  }
`;

export default function SingleDestinationPage({ data }) {
  const destination = data.destination;
  console.log(data);
  return (
    <Sectiontest>
      <p>{destination.type}</p>
    </Sectiontest>
  );
}

export const query = graphql`
  query($slug: String!) {
    destination: sanityDestination(slug: { current: {eq: $slug} }) {
      type
    }
  }
`;
