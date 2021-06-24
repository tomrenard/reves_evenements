import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../assets/images/logotest.png';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useStaticQuery, graphql } from 'gatsby';


const SectionNavStyles = styled.section`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 1000;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  &.scrolled {
    box-shadow: rgb(0 0 0 / 8%) 0px 4px 4px;
  }
`;

const NavStyles = styled.nav`
  width: 100%;
  height: 100%;
  align-content: center;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: 104px;
  .logo img {
    width: auto;
    height: 40px;
    @media (max-width: 1300px) {
      padding: 0 40px;
    }
    @media (max-width: 700px) {
      padding: 0 24px;
    }
  }
  .hamburger {
    margin-right: 40px;
    font-size: 2em;
    cursor: pointer;
    @media (min-width: 900px) {
      display: none;
    }
  }
  .menu-ul-home {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: auto;
    li {
      margin: 0px 20px;
    }
    @media (max-width: 900px) {
      display: none;
    }
  }
  .menu-to-hover:hover {
    color: var(--gold);
  }
  .dropdown {
    float: left;
    overflow: hidden;
   }
  .drop:hover + .container-dropdown {
    visibility: visible;
    opacity: 1;
  }
  .container-dropdown {
    position: fixed;
    top: 100px;
    left: 0px;
    right: 0px;
    z-index: 1000;
    display: flex;
    justify-content: center;
    width: auto;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.5s, opacity 0.2s linear;
    &:hover {
      visibility: visible;
      opacity: 1;
    }
  }
  .dropdown-content {
    border-radius: 16px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    min-width: 450px;
    background-color: white;
    max-width: 900px;
    width: 100%;
    padding: 24px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .hamb-drop {
    display: none;
  }
  .clicked {
    display: block;
  }
`;

const ContentMenuDropdownStyles = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ColumnContentDropStyles = styled.div`
  padding: 8px;
  h4 {
    font-size: 0.82em;
  }
  p {
    color: gray;
    font-weight: 100;
    font-size: 0.8em;
  }
`;

export default function Nav() {
  const [offset, setOffset] = useState(0);
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [hamIsShown, setHamIsShown] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);
  const data = useStaticQuery(graphql`query NavMenuDropdown {
    events: allSanityEvent {
      nodes {
        type
        contentmenuevent
        slug {
          current
        }
      }
    }
    destinations: allSanityDestination {
      nodes {
        type
        contentmenudestination
        slug {
          current
        }
      }
    }
  }
`)
  const events = data.events.nodes;
  const destinations = data.destinations.nodes;
  return (
    <SectionNavStyles className={ offset > 0 ? 'scrolled' : ''} >
      <NavStyles>
        <div className='logo'>
          <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <ul className="menu-ul-home">
          <li>
            <div onMouseEnter={() => setIsShown1(true)} onMouseLeave={() => setIsShown1(false)} className="dropdown">
              <div className="drop">
                <Link className="menu-to-hover" to="/evenement/seminaires">Événements
                {isShown1 ?
                <IoIosArrowUp style={{ verticalAlign: "center", paddingLeft: "2px", fontSize: "0.65em" }} />
                : <IoIosArrowDown style={{ verticalAlign: "center", paddingLeft: "2px", fontSize: "0.65em" }} />
                }
                </Link>
              </div>
              <div className="container-dropdown">
                <div className="dropdown-content">
                 {events.map((event, index) => (
                  <ContentMenuDropdownStyles key={index}>
                    <ColumnContentDropStyles className="events-drop">
                      <Link className="menu-to-hover" to={`/evenement/${event.slug.current}`}><h4>{event.type}</h4></Link>
                      <p>{event.contentmenuevent}</p>
                    </ColumnContentDropStyles>
                  </ContentMenuDropdownStyles>
                 ))}
                </div>
              </div>
            </div>
          </li>
          <li>
            <div onMouseEnter={() => setIsShown2(true)} onMouseLeave={() => setIsShown2(false)} className="dropdown">
              <div className="drop">
                <Link className="menu-to-hover" to="/destination/france">Destinations
                {isShown2 ?
                <IoIosArrowUp style={{ verticalAlign: "center", paddingLeft: "2px", fontSize: "0.65em" }} />
                : <IoIosArrowDown style={{ verticalAlign: "center", paddingLeft: "2px", fontSize: "0.65em" }} />
                }
                </Link>
              </div>
              <div className="container-dropdown">
                <div className="dropdown-content">
                  {destinations.map((des, index) => (
                  <ContentMenuDropdownStyles key={index}>
                    <ColumnContentDropStyles className="des-drop">
                      <Link className="menu-to-hover" to={`/destination/${des.slug.current}`}><h4>{des.type}</h4></Link>
                      <p>{des.contentmenudestination}</p>
                    </ColumnContentDropStyles>
                  </ContentMenuDropdownStyles>
                 ))}
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link className="menu-to-hover" to="/qui-sommes-nous">À propos</Link>
          </li>
          <li>
            <Link to="/contact"><button>Nous contacter</button></Link>
          </li>
        </ul>
        <div onClick={()=> setHamIsShown(!hamIsShown)} className="hamburger">
          <GiHamburgerMenu />
        </div>
        <div className={hamIsShown ? "hamb-drop clicked" : "hamb-drop"}>
          <p>List menu</p>
        </div>
      </NavStyles>
    </SectionNavStyles>
  );
}
