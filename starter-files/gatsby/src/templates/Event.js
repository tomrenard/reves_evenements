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

export default function SingleEventPage({ data }) {
  const event = data.event;
  return (
    <Sectiontest>
      <p>{event.type}</p>
    </Sectiontest>
  );
}

export const query = graphql`
  query($slug: String!) {
    event: sanityEvent(slug: { current: {eq: $slug} }) {
      type
    }
  }
`;