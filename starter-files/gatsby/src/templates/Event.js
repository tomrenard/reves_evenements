import React from 'react';
import { graphql } from 'gatsby';

export default function SingleEventPage({ data }) {
  const event = data.event;
  console.log(event);
  return (
    <>
      <p>{event.type}</p>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    event: sanityEvent(slug: { current: {eq: $slug} }) {
      type
    }
  }
`;
