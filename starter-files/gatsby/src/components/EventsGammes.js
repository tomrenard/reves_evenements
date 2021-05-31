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
  flex: 1 1 0%;
  max-width: 365px;
  min-width: 241px;
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
  flex-wrap: wrap;
  flex: 2 1 0%;
`;

const RightGridGammesStyles = styled.div`
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  display: grid;
  width: 100%;
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
            <RightColumnGammesStyles>
              <RightGridGammesStyles>
                {events.map(event => (
                  <div>
                    <div>
                      <Img fluid={event.imageevent.asset.fluid} alt={event.type} />
                    </div>
                    <h4>{event.type}</h4>
                    <p>{event.contentevent}</p>
                    <Link to={`/${event.type}`}>En savoir plus</Link>
                  </div>
                ))}
              </RightGridGammesStyles>
            </RightColumnGammesStyles>
          </LeftColumnGammesStyles>
        </DivContentGammesStyles>
      </DivGammesStyles>
    </SectionGammesStyles>
  );
}
