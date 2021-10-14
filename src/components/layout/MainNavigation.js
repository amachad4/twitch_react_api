import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import Form from '../UI/Form.js';

/**
 * Functional react component for nav bar
 * 
 * @returns {JSX.Element} - Rendered Main Navigation component
 */

const MainNavigation = () => {

  return (
    <header className={classes.header}>
      <div className={classes.logo}><Link to="/home">Twitch API</Link></div>
      <Form placeholder="Search for a Streamer" />
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/home' activeClassName={classes.active}>
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;