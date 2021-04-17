import React from "react";

const Song = ({ currentsong, isplaying }) => {
    return (
        <div className="song-container">
            <div className="hole"></div>
            <img alt={currentsong.name} src={currentsong.cover} className={`${isplaying ? "rotate" : ""}`}></img>
            <h2>{currentsong.name}</h2>
            <h3>{currentsong.artist}</h3>
        </div>

    );
}

export default Song;