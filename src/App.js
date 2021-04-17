import React, { useState, useRef } from 'react';
import "./style/app.scss";

//adding components
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library"
import Nav from "./components/Navbar";
//utils
import chillHop from "./utils";


function App() {

  const audioRef = useRef(null);
  const [songs] = useState(chillHop());
  const [currentsong, setCurrentSongs] = useState(songs[0]);
  const [isplaying, setIsplaying] = useState(false);
  const [isnavclick, setIsnavClick] = useState(false);

  return (
    <div className={`App ${isnavclick ? "libary-active" : ""}`} style={{
      background: `linear-gradient(90deg, rgba(2,0,36,1) 0%, ${currentsong.color[0]} 50%, ${currentsong.color[1]} 100%)`
    }}>
      <Nav isnavclick={isnavclick} setIsnavClick={setIsnavClick} />
      <Song currentsong={currentsong} isplaying={isplaying} />
      <Player isplaying={isplaying} setIsplaying={setIsplaying} currentsong={currentsong} setCurrentSongs={setCurrentSongs} songs={songs} audioRef={audioRef} />
      <Library songs={songs} setCurrentSongs={setCurrentSongs} currentsong={currentsong} audioRef={audioRef} isplaying={isplaying} isnavclick={isnavclick} />
    </div>
  );
}

export default App;
