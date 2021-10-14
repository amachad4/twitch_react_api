import React from 'react';
import classes from "./Home.module.css";

/**
 * Functional react component for home page
 * 
 * @returns {JSX.Element} - Rendered Home component
 */

const Home = () => {
    return(
        <div className={classes.home}>
            <h2>Welcome to my Twitch API React App!</h2>
            <hr />
            <h3>This project utilizes Twitch's RESTFul API</h3>
            <p>Search for any streamer in the search bar to see if they're online and what game they're playing!</p>
        </div>
    );
}

export default Home;