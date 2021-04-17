import React from "react";

const LibrarySong = ({ song, setCurrentSongs, audioRef, isplaying, currentsong }) => {


    const changeSongHandler = async () => {
        await setCurrentSongs(song);
        if (isplaying) audioRef.current.play();
    }
    return (
        <div onClick={changeSongHandler} className={`library-song ${song.id === currentsong.id ? "selected" : ""}`} >
            <img src={song.cover} alt={song.name}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
}

export default LibrarySong;