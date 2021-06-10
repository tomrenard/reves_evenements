import React, { useState, useEffect } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { VscArrowRight } from 'react-icons/vsc';
import { AiOutlineArrowRight } from 'react-icons/ai';
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
  max-width: 35%;
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
  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

const LeftColumnGammesStyles = styled.div`
  width: 100%;
  display: flex;
  max-width: 280px;
  min-width: 240px;
  margin-right: 120px;
  @media (max-width: 900px) {
    margin-bottom: 2em;
  }
`;

const LeftContentDivGammesStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const DivEventTypeStyles = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid lightgray;
  h4 {
    margin: 0;
    font-weight: 100;
    margin-left: 5px;
  }
  &:hover {
    background-color: rgb(227, 227, 227);
  }
  &.active {
    background-color: var(--gold);
    color: white;
  }
`;

const RightColumnGammesStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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
  height: 100%;
  justify-content: flex-start;
  border: 1px solid rgb(227, 227, 227);
  div {
    border-radius: 20px;
    height: 100%;
    min-height: 200px;
    max-height: 240px;
    overflow: hidden;
  }
  Img {
    min-width: 390px;
    max-height: 200px;
  }
  h5 {
    font-size: 1.2em;
    padding-left: 12px;
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
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ContentCardGammesStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function EventsGammes({ catEvents, events, event }) {
  const [activeType, setActiveType] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  let defaultFilter = event?.type || "Team-buildings";
  const [activeFilter, setActiveFilter] = useState(defaultFilter);
  const EventsFiltered = events.filter(event => event.typeevents.type === `${activeFilter}`);
  let catEventsFiltered = catEvents;
  event ? catEventsFiltered = catEvents.filter(catEvent => catEvent.type === `${event.type}`) : catEvents;
  function handleClick(i) {
    setActiveType(true);
    setActiveIndex(i);
  }
  function handleFilter(catEvent) {
    setActiveFilter(`${catEvent.type}`);
  }
  return (
    <SectionGammesStyles>
      <DivGammesStyles>
        <DivHeaderGammesStyles>
          <h6>Gamme d'événements</h6>
          { event ?
            <h2>Explorez tous nos {event.type.toLowerCase()}</h2> :
          <h2>Explorez tous nos types d'événements</h2>
          }
        </DivHeaderGammesStyles>
        <DivContentGammesStyles>
          <LeftColumnGammesStyles>
            <LeftContentDivGammesStyles>
              {catEventsFiltered.map((catEvent, i) => (
                <DivEventTypeStyles onClick={() => { handleClick(i); handleFilter(catEvent);}} className={activeType && activeIndex === i ? `active ${catEvent.type}` : ''} key={catEvent._id}>
                  <VscArrowRight /><h4>{catEvent.type}</h4>
                </DivEventTypeStyles>
              ))}
            </LeftContentDivGammesStyles>
          </LeftColumnGammesStyles>
          <RightColumnGammesStyles>
            <RightGridGammesStyles>
              {EventsFiltered.map(e => (
                <CardGammesStyles key={e._id} className={e.typeevents.type}>
                  <div>
                    <Img fluid={e.imageevent.asset.fluid} alt={e.type} />
                  </div>
                  <ContentCardGammesStyles>
                  <h5>{e.type}</h5>
                  <p>{e.contentevent}</p>
                  { event ?
                  <Link className='linkevent' to="/contact">Demander un devis <span>&#8594;</span></Link>
                  :
                  <Link className='linkevent' to={`/evenement/${e.typeevents.type.toLowerCase().replace(/\s+/g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, "") }`}>En savoir plus <span>&#8594;</span></Link>
                  }
                  </ContentCardGammesStyles>
                </CardGammesStyles>
              ))}
            </RightGridGammesStyles>
          </RightColumnGammesStyles>
        </DivContentGammesStyles>
      </DivGammesStyles>
    </SectionGammesStyles>
  );
}
