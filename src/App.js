//Adding css
import "./styles/app.scss";
import { useState } from 'react';

//Adding components
import Song from './components/Song';
import Player from './components/Player';

//Import data
import data from "./data";

function App() {
  // States
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player isPlaying={isPlaying} currentSong={currentSong} setIsPlaying={setIsPlaying}/>
    </div>
  );
}

export default App;
