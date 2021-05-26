import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../assets/images/download.svg'

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
`;

const NavStyles = styled.nav`
  width: 100%;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0px auto;
  height: 104px;
  .logo img {
    width: auto;
    height: 40px;
  }
  ul {
    display: flex;
    justify-content: space-between;
    width: auto;
    li {
      margin: 0px 20px;
    }
  }
`;

export default function Nav() {
  return (
    <SectionNavStyles>
      <NavStyles>
        <div className='logo'>
          <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <ul>
          <li>
            <Link to="/">Événements</Link>
          </li>
          <li>
            <Link to="/">Destinations</Link>
          </li>
          <li>
            <Link to="/about">À propos</Link>
          </li>
        </ul>
        <div>
          <button>
            <Link to="/contact">Nous contacter</Link>
          </button>
        </div>
      </NavStyles>
    </SectionNavStyles>
  );
}
