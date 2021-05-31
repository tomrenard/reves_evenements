import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { VscArrowRight } from 'react-icons/vsc';
import { Link } from 'gatsby';

const SectionGammesStyles = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 40px;
`;

const DivGammesStyles = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const DivHeaderGammesStyles = styled.div`
  width: 100%;
  max-width: 30%;
  display: flex;
  flex-direction: column;
  padding-bottom: 36px;
  h2 {
    margin: 0;
    font-size: 2.6em;
  }
  h6 {
    text-transform: uppercase;
    font-size: 0.9em;
    font-weight: 600;
    color: rgb(102, 102, 102);
  }
`;

const DivContentGammesStyles = styled.div`
  width: 100%;
  display: flex;
`;

const LeftColumnGammesStyles = styled.div`
  width: 100%;
  display: flex;
  max-width: 280px;
  min-width: 240px;
  margin-right: 120px;
`;

const LeftContentDivGammesStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const DivEventTypeStyles = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid lightgray;
  h4 {
    margin: 0;
    font-weight: 100;
    margin-left: 5px;
  }
`;

const RightColumnGammesStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const RightGridGammesStyles = styled.div`
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  display: grid;
  width: 100%;
`;

const CardGammesStyles = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 390px;
  border-radius: 20px;
  border: 1px solid rgb(227, 227, 227);
  div {
    border-radius: 20px;
    height: 100%;
    min-height: 200px;
    max-height: 200px;
    overflow: hidden;
  }
  Img {
    min-width: 390px;
    max-height: 200px;
  }
  h5 {
    font-size: 1.2em;
    padding: 12px;
    margin: 0;
    font-weight: 400;
  }
  p {
    font-weight: 100;
    padding: 12px;
    font-size: 0.95em;
    margin: 0;
  }
  .linkevent {
    padding: 12px;
    font-size: 0.95em;
    font-weight: 100;
    align-self: end;
  }
`;

export default function EventsGammes({ catEvents, events }) {
  return (
    <SectionGammesStyles>
      <DivGammesStyles>
        <DivHeaderGammesStyles>
          <h6>Gamme d'événements</h6>
          <h2>Explorez tous nos types d'événements</h2>
        </DivHeaderGammesStyles>
        <DivContentGammesStyles>
          <LeftColumnGammesStyles>
            <LeftContentDivGammesStyles>
              {catEvents.map(catEvent => (
                <DivEventTypeStyles key={catEvent._id}>
                  <VscArrowRight /><h4>{catEvent.type}</h4>
                </DivEventTypeStyles>
              ))}
            </LeftContentDivGammesStyles>
          </LeftColumnGammesStyles>
          <RightColumnGammesStyles>
            <RightGridGammesStyles>
              {events.map(event => (
                <CardGammesStyles>
                  <div>
                    <Img fluid={event.imageevent.asset.fluid} alt={event.type} />
                  </div>
                  <h5>{event.type}</h5>
                  <p>{event.contentevent}</p>
                  <Link className='linkevent' to={`/${event.type}`}>En savoir plus</Link>
                </CardGammesStyles>
              ))}
            </RightGridGammesStyles>
          </RightColumnGammesStyles>
        </DivContentGammesStyles>
      </DivGammesStyles>
    </SectionGammesStyles>
  );
}
