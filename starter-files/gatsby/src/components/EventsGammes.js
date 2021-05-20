import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const ColumsGammesStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  Img {
    width: 100px;
    border-radius: 60%;
  }
`;

export default function EventsGammes() {
  const data = useStaticQuery(graphql`query Gammes {
    allSanityHomePage {
      nodes {
        title3
        typeevent1
        typeevent2
        typeevent3
        typeevent4
        contentevent1
        contentevent2
        contentevent3
        contentevent4
        imagetypeevent1 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
        imagetypeevent2 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
        imagetypeevent3 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
        imagetypeevent4 {
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
  console.log(content);
  return (
    <>
      <h2>{content.title3}</h2>
      <ColumsGammesStyles>
        <div className="column1">
          <Img fluid={content.imagetypeevent1.asset.fluid} alt={content.typeevent1} />
          <h3>{content.typeevent1}</h3>
          <p>{content.contentevent1}</p>
        </div>
        <div className="column2">
          <Img fluid={content.imagetypeevent2.asset.fluid} alt={content.typeevent2} />
          <h3>{content.typeevent2}</h3>
          <p>{content.contentevent2}</p>
        </div>
        <div className="column3">
          <Img fluid={content.imagetypeevent3.asset.fluid} alt={content.typeevent3} />
          <h3>{content.typeevent3}</h3>
          <p>{content.contentevent3}</p>
        </div>
        <div className="column4">
          <Img fluid={content.imagetypeevent4.asset.fluid} alt={content.typeevent4} />
          <h3>{content.typeevent4}</h3>
          <p>{content.contentevent4}</p>
        </div>
      </ColumsGammesStyles>
    </>
  );
}
