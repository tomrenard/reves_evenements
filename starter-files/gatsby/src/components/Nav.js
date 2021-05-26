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
position: fixed;
margin: 0 40px;
z-index: 100;
background-color: white;
width: 100%;
top: 0;
  .logo img {
    width: 165px;;
    display: block;
    margin-left: 2em;
  }
  ul {
      margin: 1em 0;
      padding: 0;
      text-align: center;
      list-style: none;
      display: grid;
      grid-template-columns: 4fr 1fr 1fr 1fr 1.3fr;
      grid-gap: 0.5rem;
      align-items: center;
    }
  a {
      font-size: 0.9em;
      font-weight: 400;
      text-decoration: none;
      display: block;
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li className='logo'>
          <Link to="/"><img src={logo} alt="" /></Link>
        </li>
        <li>
          <Link to="/">Événements</Link>
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
  );
}
