import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ isnavclick, setIsnavClick }) => {

    const buttonToggle = () => {
        setIsnavClick(!isnavclick);
    }
    return (
        <div className="navbar">
            <h2>Music Player</h2>
            <button onClick={buttonToggle}>
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </div>
    );
}

export default Nav;