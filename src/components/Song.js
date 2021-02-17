//Import font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faVolumeUp} from "@fortawesome/free-solid-svg-icons";


const Song = ({currentSong, songInfo, audioRef}) => {
    const rotateImg = {
        transform: `rotate(${(songInfo.animationPercentage * 360 / 100)}deg)`
    };
    //Event handlers
    const volumeHandler = (e) => {
        const setVolume = e.target.value / 100;
        audioRef.current.volume = setVolume;
    };

    return (
        <div className="song-container">
            <img src={currentSong.cover} alt={currentSong.name} style={rotateImg} ></img>
            <div className="volume-control">
                <FontAwesomeIcon className="volume-track" icon={faVolumeUp} />
                <input min={0} 
                    max={100}
                    defaultValue={100}
                    type="range"
                    onChange={volumeHandler}/>
            </div>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    )
}

export default Song;