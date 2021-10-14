import React from 'react';
import classes from './LoadingSpinner.module.css';

/**
 * Functional react component for loading spinner
 *
 * @returns {JSX.Element} - Rendered LoadingSpinner component
 */
const LoadingSpinner = () => {
  return <div className={classes.spinner}></div>;
}

export default LoadingSpinner;