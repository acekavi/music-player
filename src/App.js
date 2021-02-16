//Adding css
import "./styles/app.scss";
import { useRef, useState } from 'react';

//Adding components
import Song from './components/Song';
import Player from './components/Player';
import Library from './components/Library';
import Nav from './components/Nav';

//Import data
import data from "./data";

function App() {
  //Ref
  const audioRef = useRef(null);
  // States
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage:0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  //Event Handlers
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //Calculate percentage
    const roundedCurrent = Math.round(current)
    const roundedDuration = Math.round(duration)
    const animationPercentage = Math.round((roundedCurrent / roundedDuration) * 100)
    setSongInfo({...songInfo, currentTime: current, duration, animationPercentage,});
  };
  const songEndHandler = async () =>{
    let currentIndex= songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex+1) % songs.length]);
    if(isPlaying) audioRef.current.play();
  };

  return (
    <div className={`App ${libraryStatus ? "library-active": ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>

      <Library songs={songs} 
       setCurrentSong={setCurrentSong}
       audioRef={audioRef}
       isPlaying={isPlaying}
       setSongs={setSongs}
       currentSong={currentSong}
       libraryStatus={libraryStatus}/>

      <Song currentSong={currentSong} isPlaying={isPlaying}/>

      <Player isPlaying={isPlaying}
       currentSong={currentSong} 
       setIsPlaying={setIsPlaying}
       songInfo={songInfo}
       setSongInfo={setSongInfo}
       audioRef={audioRef}
       songs={songs}
       setCurrentSong={setCurrentSong}
       setSongs={setSongs}/>

      <audio onTimeUpdate={timeUpdateHandler} 
          ref={audioRef} 
          src={currentSong.audio} 
          onLoadedMetadata={timeUpdateHandler}
          onEnded={songEndHandler}></audio>
    </div>
  );
}

export default App;
