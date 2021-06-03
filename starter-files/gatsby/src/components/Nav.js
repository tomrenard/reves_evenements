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
    }
  }
  .dropdown {
    float: left;
    overflow: hidden;
    &:hover .dropdown-content {
      visibility: visible;
      opacity: 1;
    }
  }
  .dropdown-content {
    margin-top: 2em;
    visibility: hidden;
    opacity: 0;
    border-radius: 10px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    position: absolute;
    min-width: 450px;
    z-index: 1000;
    transition: visibility 0.5s, opacity 0.2s linear;
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
              <Link to="/">Événements</Link>
              <div className="dropdown-content">
                <p>Séminaires</p>
              </div>
            </div>
          </li>
          <li>
            <Link to="/">Destinations</Link>
          </li>
          <li>
            <Link to="/about">À propos</Link>
          </li>
          <li>
            <button>
              <Link to="/contact">Nous contacter</Link>
            </button>
          </li>
        </ul>
      </NavStyles>
    </SectionNavStyles>
  );
}
