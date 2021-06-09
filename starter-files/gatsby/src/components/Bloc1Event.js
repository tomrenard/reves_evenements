import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image/withIEPolyfill';

const SectionH2 = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 40px;
`;

const Div1EventBloc1Styles = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;
  h2 {
    font-size: 2.6em;
  }
  margin-bottom: 2em;
`;

const SectionEventBloc1Styles = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 40px;
`;

const DivEventBloc1Styles = styled.div`
  margin: 40px auto;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

const DivLeftBloc1Styles = styled.div`
  width: 100%;
  max-width: 49%;
  height: 100%;
  Img {
    border-radius: 20px;
  }
`;

const DivRightBloc1Styles = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 45%;
  width: 100%;
  height: 100%;
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
  }
  p {
    font-weight: 100;
    line-height: 1.4;
  }
`;

export default function Bloc1Event({ event, destination }) {
  return(
    <>
    { event ?
    <>
    <SectionH2>
      <Div1EventBloc1Styles>
        <h2>{event.titletransi1}</h2>
      </Div1EventBloc1Styles>
    </SectionH2>
    <SectionEventBloc1Styles>
      <DivEventBloc1Styles>
        <DivLeftBloc1Styles>
          <Img fluid={event.imageevent2.asset.fluid} alt={event.titleevent2h2} />
        </DivLeftBloc1Styles>
        <DivRightBloc1Styles>
          <h6>{event.titleevent2h6}</h6>
          <h3>{event.titleevent2h2}</h3>
          <p>{event.contentevent2}</p>
        </DivRightBloc1Styles>
      </DivEventBloc1Styles>
    </SectionEventBloc1Styles>
    </>
    :
    <>
    <SectionH2>
      <Div1EventBloc1Styles>
        <h2>{destination.titletransidestination1}</h2>
      </Div1EventBloc1Styles>
    </SectionH2>
    <SectionEventBloc1Styles>
      <DivEventBloc1Styles>
        <DivLeftBloc1Styles>
          <Img fluid={destination.imagedestination2.asset.fluid} alt={destination.titledestination2h2} />
        </DivLeftBloc1Styles>
        <DivRightBloc1Styles>
          <h6>{destination.titledestination2h6}</h6>
          <h3>{destination.titledestination2h2}</h3>
          <p>{destination.contentdestination2}</p>
        </DivRightBloc1Styles>
      </DivEventBloc1Styles>
    </SectionEventBloc1Styles>
    </>
    }
    </>
  );
}
