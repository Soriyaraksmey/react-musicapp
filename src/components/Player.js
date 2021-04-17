import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight, faPause } from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentsong, setIsplaying, isplaying, audioRef, setCurrentSongs, songs }) => {


    const [songinfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    })

    const onPlayHandler = () => {
        setIsplaying(!isplaying);
        audioRef.current[isplaying ? "pause" : "play"]();
    }
    const timeUpdateHandler = (e) => {
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({ ...songinfo, currentTime, duration });
    }

    const onDragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songinfo, currentTime: e.target.value });
    }

    const convertTime = (time) => {
        return (Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2))
    }

    const skipsongHandler = async (direction) => {
        const currentSongIndex = songs.findIndex((song) => song.id === currentsong.id);
        if (direction === "skip-back") {
            await setCurrentSongs(songs[(currentSongIndex + songs.length - 1) % songs.length]);
            if (isplaying) audioRef.current.play();
        }
        if (direction === "skip-forward") {
            await setCurrentSongs(songs[(currentSongIndex + 1) % songs.length]);
            if (isplaying) audioRef.current.play();
        }
        return;
    }


    return (
        <div className="player">
            <div className="time-control">
                <p>{convertTime(songinfo.currentTime)}</p>
                <input
                    type="range"
                    min={0}
                    max={songinfo.duration || 0.00}
                    onChange={onDragHandler}
                    value={songinfo.currentTime}

                ></input>
                <p>{convertTime(songinfo.duration || 0)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon onClick={() => skipsongHandler("skip-back")} className="skip-back" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={onPlayHandler} className="play" size="2x" icon={isplaying ? faPause : faPlay} />
                <FontAwesomeIcon onClick={() => skipsongHandler("skip-forward")} className="skip-forward" size="2x" icon={faAngleRight} />
            </div>
            <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentsong.audio} onEnded={() => skipsongHandler("skip-forward")}></audio>
        </div>
    );
}

export default Player;