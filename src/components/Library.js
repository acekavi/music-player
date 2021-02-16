import LibrarySong from "./LibrarySong";

const Library = ({songs, setCurrentSong, audioRef, isPlaying, libraryStatus}) => {
    return(
        <div className={`library ${libraryStatus ? 'active-library': null}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => 
                <LibrarySong
                  setCurrentSong={setCurrentSong} 
                  song={song}
									songs={songs}
                  key={song.id}
									audioRef={audioRef}
									isPlaying={isPlaying}
                />)}
            </div>
        </div>
    )
};

export default Library;