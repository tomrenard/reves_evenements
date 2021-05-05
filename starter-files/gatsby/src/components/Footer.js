import React from 'react';
import { Link } from 'gatsby';

export default function Footer() {
  return (
    <footer>
      <p className='center'>&copy; Rêves d'Événements {new Date().getFullYear()}</p>
    </footer>
  );
}
