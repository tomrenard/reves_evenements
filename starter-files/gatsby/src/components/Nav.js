import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  ul {
      margin: 0;
      padding: 0;
      text-align: center;
      list-style: none;
      display: grid;
      grid-template-columns: 4fr 1fr 1fr 1fr 1.3fr;
      grid-gap: 0.5rem;
      align-items: center;
    }
  a {
      font-size: 1rem;
      text-decoration: none;
      display: block;
      &:hover {
        color: var(--blue);
      }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Logo</Link>
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
