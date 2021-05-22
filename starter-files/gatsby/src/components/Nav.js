import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../assets/images/logoBindiv.png'

const NavStyles = styled.nav`
  margin-bottom: 4em;
  .logo img {
    width: 48px;
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
