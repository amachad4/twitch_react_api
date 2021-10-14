import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import classes from "../UI/Form.module.css";

/**
 * Functional react component for form input
 * @param {object} props - React props 
 * @returns {JSX.Element} - Rendered Form component
 */
const Form = props => {
    const userInputRef = useRef();
    const history = useHistory();
    const { placeholder } = props;

    const handleFormSubmission = e => {
        const streamer = userInputRef.current.value; // useRef hook holds input value
        history.push('/highlight/'+streamer); // highlight contains card component
        e.preventDefault();
    }

    return (
        <form onSubmit={handleFormSubmission} className={classes.search}>
          <input className={classes[`search_input`]} type="text" placeholder={placeholder} ref={userInputRef} required/>
          <button type="submit" className={classes[`search_button`]}>
            <svg className={classes[`search_icon`]}>
              <use xlinkHref="../../img/sprite.svg#icon-magnifying-glass"></use>
            </svg>
          </button>
        </form>
    );
}

export default Form;
