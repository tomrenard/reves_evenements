import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image/withIEPolyfill';

const SectionEventBloc4Styles = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 40px;
  @media (max-width: 900px) {
    padding: 0px 24px;
  }
`;

const DivEventBloc4Styles = styled.div`
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

const DivRightBloc4Styles = styled.div`
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

const DivLeftBloc4Styles = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 45%;
  width: 100%;
  height: 100%;
  @media (max-width: 900px) {
    max-width: 80%;
    order: 2;
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

export default function Bloc4Event({ event, destination }) {
  return(
    <SectionEventBloc4Styles>
    { event ?
      <DivEventBloc4Styles>
        <DivLeftBloc4Styles>
          <h6>{event.titleevent5h6}</h6>
          <h3>{event.titleevent5}</h3>
          <p>{event.contentevent5}</p>
        </DivLeftBloc4Styles>
        <DivRightBloc4Styles>
          <Img fluid={event.imageevent5.asset.fluid} alt={event.titleevent5} />
        </DivRightBloc4Styles>
      </DivEventBloc4Styles>
      :
      <DivEventBloc4Styles>
        <DivLeftBloc4Styles>
          <h6>{destination.titledestination5h6}</h6>
          <h3>{destination.titledestination5}</h3>
          <p>{destination.contentdestination5}</p>
        </DivLeftBloc4Styles>
        <DivRightBloc4Styles>
          <Img fluid={destination.imagedestination5.asset.fluid} alt={destination.titledestination5} />
        </DivRightBloc4Styles>
      </DivEventBloc4Styles>
    }
    </SectionEventBloc4Styles>
  );
}
