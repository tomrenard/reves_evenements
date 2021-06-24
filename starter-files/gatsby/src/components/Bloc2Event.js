import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image/withIEPolyfill';

const SectionEventBloc2Styles = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 40px;
  @media (max-width: 900px) {
    padding: 0px 24px;
  }
`;

const DivEventBloc2Styles = styled.div`
  margin: 40px auto;
  max-width: 1200px;
  width: 100%;
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

const DivRightBloc2Styles = styled.div`
  width: 100%;
  max-width: 49%;
  height: 100%;
  Img {
    border-radius: 20px;
  }
  @media (max-width: 900px) {
    max-width: 80%;
  }
`;

const DivLeftBloc2Styles = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 45%;
  width: 100%;
  height: 100%;
  @media (max-width: 900px) {
    max-width: 80%;
    order: 1;
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

export default function Bloc2Event({ event, destination }) {
  return(
    <SectionEventBloc2Styles>
    { event ?
      <DivEventBloc2Styles>
        <DivLeftBloc2Styles>
          <h6>{event.titleevent3h6}</h6>
          <h3>{event.titleevent3}</h3>
          <p>{event.contentevent3}</p>
        </DivLeftBloc2Styles>
        <DivRightBloc2Styles>
          <Img fluid={event.imageevent3.asset.fluid} alt={event.titleevent3} />
        </DivRightBloc2Styles>
      </DivEventBloc2Styles>
    :
      <DivEventBloc2Styles>
        <DivLeftBloc2Styles>
          <h6>{destination.titledestination3h6}</h6>
          <h3>{destination.titledestination3}</h3>
          <p>{destination.contentdestination3}</p>
        </DivLeftBloc2Styles>
        <DivRightBloc2Styles>
          <Img fluid={destination.imagedestination3.asset.fluid} alt={destination.titledestination3} />
        </DivRightBloc2Styles>
      </DivEventBloc2Styles>
    }
    </SectionEventBloc2Styles>
  );
}
