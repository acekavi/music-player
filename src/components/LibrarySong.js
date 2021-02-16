const LibrarySong = ({song, setCurrentSong, audioRef, isPlaying}) => {
    const songSelecthandler = () => {
        setCurrentSong(song);

        if(isPlaying){
            const playPromise = audioRef.current.play();
            if(playPromise !== undefined){
                playPromise.then((audio)=>{
                    audioRef.current.play();
                })
            }
        }
    };

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