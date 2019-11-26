import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
      	<Link to="/">
      		<li>Home</li>
      	</Link>

      	<Link to="/recipes">
      		<li>All Recipes</li>
      	</Link>
      </ul>
    </nav>
  );
}

export default Nav;
