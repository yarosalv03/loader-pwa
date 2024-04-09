import React, { useState } from 'react'
import '../styles/Library.css'

export default function LibraryTab() {
    const [tabStatus, setTabStatus] = useState(0);
    const setPlaylist = () => {
        setTabStatus(0);
    }
    const setAllSongs = () => {
        setTabStatus(1);
    }
    return (
        <div className='library-tab'>
            <div className='tab playlists-tab' onClick={setPlaylist}>
                {tabStatus === 1 ? <div>Playlists (3)</div> :
                <button className='tab-button'>Playlists (3)</button>}
            </div>
            <div className='tab all-songs-tab' onClick={setAllSongs}>
                {tabStatus === 0 ? <div>All Songs (1000)</div> :
                <button className='tab-button'>All Songs (1000)</button>}
            </div>
        </div>
    )
}
