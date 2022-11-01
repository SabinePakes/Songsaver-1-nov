import React from 'react'

const SongsTable = props => (
    <table className="song-table">
        <thead className="song-header">
            <tr>
                <th className="song-row__item-heading">Song</th>
                <th className="song-row__item-heading">Artist</th>
                <th className="song-row__item-heading">Genre</th>
                <th className="song-row__item-heading">Rating</th>
                <th className="song-row__item-heading">&nbsp;</th>
            </tr>
        </thead>

        <tbody>
            {props.songs.length > 0 ? (
            props.songs.map(song => (
                <tr key={song.id}>
                    <td className="song-row__item">{song.title}</td>
                    <td className="song-row__item">{song.artist}</td>
                    <td className="song-row__item">{song.genre}</td>
                    <td className="song-row__item">{song.rating}</td>
                    <td className="song-row__item text-center"><button 
                                                                className="btn-delete" 
                                                                onClick={ () => props.deleteSong(song.id) }
                                                                >delete</button></td>
                </tr>
                    ))
                ): (
                    <tr>
                        <td colSpan={5}>No songs yet</td>
                    </tr>
                    )
            }
        </tbody>
   </table>
    )


export default SongsTable