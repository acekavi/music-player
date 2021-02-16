import { playAudio } from "../util";

const LibrarySong = ({song, setCurrentSong, audioRef, isPlaying}) => {
    const songSelecthandler = () => {
        setCurrentSong(song);
    };
    playAudio(isPlaying, audioRef);
    return (
        <div onClick={songSelecthandler} className={`library-song ${song.active? "selected": null}`}>
            <img src={song.cover} alt={song.name}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;