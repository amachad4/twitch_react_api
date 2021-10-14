import React from 'react';
import { Fragment } from 'react';
import MainNavigation from './MainNavigation.js';

/**
 * Functional react component for main page layout
 * @param {object} props - React props 
 * @returns {JSX.Element} - Rendered Layout Component
 */
const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;