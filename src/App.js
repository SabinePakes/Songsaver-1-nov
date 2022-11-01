import React, { useState } from 'react';
import './App.css';
import AddSong from './AddSong'
import Table from './Table'

const App = () => {

const songsData = []

const [ songs , setSongs ] = useState(songsData)

const addSong = song => {
  setSongs([ ...songs, song])
}
const sortGenre = songs.sort( (a) => a.genre )

const deleteSong = id => {
  setSongs(songs.filter(song => song.id !== id))
}


const songGenres = [
  { id: 0, name: "Genre ?" },
  { id: 1, name: "Rock" },
  { id: 2, name: "Pop" },
  { id: 3, name: "Nederlands" },
  { id: 4, name: "Jazz" }
]

const songRating = [
  { id: 0, name: "Rating ?" },
  { id: 1, name: "1 star" },
  { id: 2, name: "2 stars" },
  { id: 3, name: "3 stars" },
  { id: 4, name: "4 stars" },
  { id: 5, name: "5 stars" }
]

  return (
    <div className="page">
      <header>
        <h1>Songsaver</h1>
      </header>
      <div className="content-container">
        <main>
          <AddSong songGenres={songGenres} songRating={songRating} addSong={addSong}/>
        </main>
        <div className="output">
          <Table songs={songs} deleteSong={deleteSong} sortGenre={sortGenre}/>
        </div>
      </div>
    </div>
  );
}

export default App;