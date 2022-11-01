import React, { useState } from 'react';

const AddSongForm = props => {

const initialFormState = {
    id: null,
    artist: '',
    title: '',
    genre: '',
    rating: ''
}
const [ song, setSong ] = useState(initialFormState)

const handleInputChange = event => {
    const { name, value } = event.target

    const songid = Math.floor(Math.random() * 101)

    setSong({ ...song, id: songid, [name]: value })

}

    return (
        <form onSubmit={event => {
            event.preventDefault()
            if (!song.artist || !song.title) return

            props.addSong(song)
            setSong(initialFormState)
        }}
        >
    <div className="formRow">
        <input
            type="text"
            name="title"
            value={song.title}
            onChange={handleInputChange}
            className="inputField"
            placeholder="Title.."
        />
        <input
            type="text"
            name="artist"
            value={song.artist}
            onChange={handleInputChange}
            className="inputField"
            placeholder="Artist.."
        />
        <select id="selectGenre" name="genre" className="selectInForm" value={song.genre} onChange={handleInputChange}>
        {props.songGenres.length > 0 ? (
                props.songGenres.map(genre => (
                <option key={genre.id} value={genre.genre}> {genre.name} </option>
                        ))
            ) : (
                <option value="0">- </option>
                )
            }
        </select>
        <select id="selectRating" name="rating" className="selectInForm" value={song.rating} onChange={handleInputChange}>
        {props.songRating.length > 0 ? (
                props.songRating.map(rate => (
                        <option key={rate.id} value={rate.id}>{rate.name}</option>
                        ))
            ) : (
                <option value="0">- </option>
                )
            }
        </select>
        <button onClick={handleInputChange} className="addBtnForm">Add!</button>
    </div>  
    </form>


        )
    }

export default AddSongForm
