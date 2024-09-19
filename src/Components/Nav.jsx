import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/mens">Men's</Link>
      </li>
      <li>
        <Link to="/ladies">Ladies</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
