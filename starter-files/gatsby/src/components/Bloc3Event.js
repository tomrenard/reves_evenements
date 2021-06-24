import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image/withIEPolyfill';

const SectionEventBloc3Styles = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 40px;
  @media (max-width: 900px) {
    padding: 0px 24px;
  }
`;

const DivEventBloc3Styles = styled.div`
  margin: 40px auto;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
  }
`;

const DivLeftBloc3Styles = styled.div`
  width: 100%;
  max-width: 49%;
  height: 100%;
  Img {
    border-radius: 20px;
  }
  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

const DivRightBloc3Styles = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 45%;
  width: 100%;
  height: 100%;
  @media (max-width: 900px) {
    max-width: 100%;
  }
  h3 {
    margin: 0;
    font-size: 2.3em;
  }
  h6 {
    margin: 0;
    margin-bottom: 1.4em;
    font-size: 0.8em;
    text-transform: uppercase;
    color: rgb(102, 102, 102);
    @media (max-width: 900px) {
    padding-top: 2em;
    }
  }
  p {
    font-weight: 100;
    line-height: 1.4;
  }
`;

export default function Bloc3Event({ event, destination }) {
  return(
    <SectionEventBloc3Styles>
    { event ?
      <DivEventBloc3Styles>
        <DivLeftBloc3Styles>
          <Img fluid={event.imageevent4.asset.fluid} alt={event.titleevent4} />
        </DivLeftBloc3Styles>
        <DivRightBloc3Styles>
          <h6>{event.titleevent4h6}</h6>
          <h3>{event.titleevent4}</h3>
          <p>{event.contentevent4}</p>
        </DivRightBloc3Styles>
      </DivEventBloc3Styles>
    :
    <DivEventBloc3Styles>
        <DivLeftBloc3Styles>
          <Img fluid={destination.imagedestination4.asset.fluid} alt={destination.titledestination4} />
        </DivLeftBloc3Styles>
        <DivRightBloc3Styles>
          <h6>{destination.titledestination4h6}</h6>
          <h3>{destination.titledestination4}</h3>
          <p>{destination.contentdestination4}</p>
        </DivRightBloc3Styles>
      </DivEventBloc3Styles>
    }
    </SectionEventBloc3Styles>
  );
}
