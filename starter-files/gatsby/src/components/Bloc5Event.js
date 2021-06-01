import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image/withIEPolyfill';

const SectionEventBloc5Styles = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 40px;
`;

const DivEventBloc5Styles = styled.div`
  margin: 40px auto;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const DivLeftBloc5Styles = styled.div`
  width: 100%;
  max-width: 49%;
  height: 100%;
  Img {
    border-radius: 20px;
  }
`;

const DivRightBloc5Styles = styled.div`
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

export default function Bloc5Event({ event }) {
  return(
    <SectionEventBloc5Styles>
      <DivEventBloc5Styles>
        <DivLeftBloc5Styles>
          <Img fluid={event.imageevent6.asset.fluid} alt={event.titleevent6} />
        </DivLeftBloc5Styles>
        <DivRightBloc5Styles>
          <h6>{event.titleevent6h6}</h6>
          <h3>{event.titleevent6}</h3>
          <p>{event.contentevent6}</p>
        </DivRightBloc5Styles>
      </DivEventBloc5Styles>
    </SectionEventBloc5Styles>
  );
}
