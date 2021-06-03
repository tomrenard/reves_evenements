import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../assets/images/logotest.png'

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
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: auto;
    li {
      margin: 0px 20px;
      &:hover a {
        color: var(--gold);
      }
    }
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
    max-width: 860px;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 48px 24px;
  }
`;

export default function Nav() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);
  return (
    <SectionNavStyles className={ offset > 0 ? 'scrolled' : ''} >
      <NavStyles>
        <div className='logo'>
          <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <ul>
          <li>
            <div className="dropdown">
              <div className="drop">
                <Link to="/">Événements</Link>
              </div>
              <div className="container-dropdown">
                <div className="dropdown-content">
                 <p>Dropdrown events</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <div className="drop">
                <Link to="/">Destinations</Link>
              </div>
              <div className="container-dropdown">
                <div className="dropdown-content">
                  <p>Dropdrown destinations</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link to="/about">À propos</Link>
          </li>
          <li>
            <button>Nous contacter</button>
          </li>
        </ul>
      </NavStyles>
    </SectionNavStyles>
  );
}
