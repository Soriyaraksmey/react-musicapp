import React from 'react';
import LibrarySong from "./Librarysong"

const Library = ({ songs, setCurrentSongs, currentsong, audioRef, isplaying, isnavclick }) => {
    return (
        <div className={`library ${isnavclick ? "active-library" : ""}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {
                    songs.map(song =>
                        <LibrarySong
                            key={song.id}
                            song={song}
                            setCurrentSongs={setCurrentSongs}
                            audioRef={audioRef}
                            isplaying={isplaying}
                            currentsong={currentsong}
                        />)
                }
            </div>
        </div>
    );
}

export default Library;