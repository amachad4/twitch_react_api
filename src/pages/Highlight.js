import React, { useEffect, useState } from 'react';
import Card from '../components/layout/Card';
import LoadingSpinner from '../components/UI/LoadingSpinner.js';
import { useParams } from 'react-router-dom';
import classes from './Highlight.module.css';

const URL1 = "https://api.twitch.tv/helix/streams?user_login=";
const URL = "https://api.twitch.tv/helix/users?login=";

const { REACT_APP_AUTH, REACT_APP_CLIENT } = process.env;

/**
 * Functional react component for containing card
 * @param {object} params - react params
 * @returns {JSX.Element} - Rendered highlight component
 */

const Highlight = () => {
    const params = useParams();
    const { streamer } = params; // pull input from URL parameter
    const [foundStreamer, setFoundStreamer] = useState([]);
    const [foundNoUser, setFoundNoUser] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchStreamer(streamer); // Runs fetch when highlight is rendered or when streamer param changes
    }, [streamer]);

    const handleUserInput = (userInput) => {
        setFoundStreamer([userInput]); // updates foundStreamer variable with returned data from fetch
    }

    const fetchStreamer = async (streamer) => {
        setLoading(true); // begins loading spinner
        // resets the foundNoUser state hook
        if(foundNoUser){
            setFoundNoUser("");
            setLoading(false);
        }
        let streamerData;
        try {
            const response = await fetch(URL+streamer.replace(/\s/g,''), {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${REACT_APP_AUTH}`,
                    'Client-ID': `${REACT_APP_CLIENT}`
                }
            });
            if(!response.ok){
                throw new Error("Something went wrong");
            }
            streamerData = await response.json();
            // throw error if treamerData.data array is empty
            if(streamerData.data.length === 0){
                throw new Error(`User ${streamer} was not found`);
            }
        } catch(error) {
            setFoundStreamer([]);
            setLoading(false);
            return setFoundNoUser(error.message);
        }

        try {
            const response = await fetch(URL1+streamerData.data[0].login, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${REACT_APP_AUTH}`,
                    'Client-ID': `${REACT_APP_CLIENT}`
                }
            });
            if(!response.ok){
                setLoading(false);
                throw new Error("Something went wrong");
            }
            const data = await response.json();
            const finalData = {...streamerData.data[0], ...data}; // final data contains all neccessary data to render card component
            setLoading(false);
            handleUserInput(finalData);
        } catch (error) {
            setLoading(false);
            console.log(error.message);
        }

    }

    

    return(
        <div className={classes.container}>
            {loading && <LoadingSpinner />}
            {foundNoUser !== "" && !loading ? <p>{foundNoUser}</p> : ''}
            {
                !loading && foundStreamer.map(stream => <Card key={stream.id} streamer={stream} />)
            }
        </div>
    );
}

export default Highlight;