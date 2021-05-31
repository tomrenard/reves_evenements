import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { GiTeamIdea } from 'react-icons/gi';
import { RiTeamFill } from 'react-icons/ri';
import { MdCardTravel } from 'react-icons/md';
import { GiPartyFlags } from 'react-icons/gi';

const GammesStyles = styled.div`
  padding: 1em;
  h2 {
    font-size: 2.5em;
    font-weight: 900;
    margin: 0.3em 0;
  }
  p {
    font-weight: 100;
  }
  text-align: center;
`;

const ColumsGammesStyles = styled.div`
  display: grid;
  gap: 2em;
  padding: 1em;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export default function EventsGammes({ content }) {
  return (
    <GammesStyles>
      <h2>{content.title3}</h2>
      <ColumsGammesStyles>
        <div className="column1">
          <div className="img-typeevent">
            <RiTeamFill />
          </div>
          <h3>{content.typeevent1}</h3>
          <p>{content.contentevent1}</p>
        </div>
        <div className="column2">
          <div className="img-typeevent">
            <GiTeamIdea />
          </div>
          <h3>{content.typeevent2}</h3>
          <p>{content.contentevent2}</p>
        </div>
        <div className="column3">
          <div className="img-typeevent">
            <MdCardTravel />
          </div>
          <h3>{content.typeevent3}</h3>
          <p>{content.contentevent3}</p>
        </div>
        <div className="column4">
          <div className="img-typeevent">
            <GiPartyFlags />
          </div>
          <h3>{content.typeevent4}</h3>
          <p>{content.contentevent4}</p>
        </div>
      </ColumsGammesStyles>
    </GammesStyles>
  );
}
