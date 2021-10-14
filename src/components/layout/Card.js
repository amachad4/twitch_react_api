import React from 'react';
import classes from './Card.module.css';

/**
 * Functional react component for displaying streamer information
 * @param {object} props - React props 
 * @returns {JSX.Element} - Rendered Card Component
 */
const Card = props => {
    const { streamer } = props;
    return(
        <div className={classes.card}>
            <h2>Streamer: { streamer.display_name }</h2>
            <h3>Status: { streamer.data.length > 0 ? <span className={classes.live}>Live</span> : "Offline" }</h3>
            { streamer.data.length > 0 && <h3>Playing: { streamer.data[0].game_name } </h3> }
            <img src={ streamer.profile_image_url } alt="Profile Image" />
        </div>
    );
}

export default Card;