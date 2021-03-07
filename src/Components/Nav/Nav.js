import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <Link to='/home'>
        <button>Home</button>
      </Link>
      <Link to='/top50'>
        <button>Top 50</button>
      </Link>
      <Link to='/seen'>
        <button>Seen</button>
      </Link>
      <button>About</button>
    </nav>
  )
}

export default Nav;
