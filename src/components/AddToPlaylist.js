import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AddToPlaylistCard from '../components/AddToPlaylistCard'
import '../styles/Home.css'

export default function AddToPlaylist({chartinfo, closeAddToPlaylist, openCreatePlaylistModal}) {
    const playlists = useSelector(state => state.playlists.playlists);
    const [addedPlaylists, setAddedPlaylists] = useState('');
    useEffect(() => {
        let temp = [];
        playlists.forEach(playlist => {
            if (playlist.songs.some(song => song.title === chartinfo.title)) {
                temp.push(playlist.name);
            }
        });
        setAddedPlaylists(temp.join(', '));
    }, [playlists, chartinfo])
    return (
        <div className='addto-playlist'>
            <div className='addto-playlist-overlap' />
            <div className='addto-playlist-panel'>
                <div className='addto-playlist-title'>
                    <div>Add To Playlist</div>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={closeAddToPlaylist}>
                        <path d="M17 1L1 17M17 17L1 1" stroke="#8391A1" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                </div>
                <div className='addto-playlist-content'>                    
                    <div className='addto-playlist-songtitle-container'>
                        <div className='addto-playlist-songtitle'>
                            <div className='addto-playlist-songtitle-name'>{chartinfo.name}</div>
                            <div className='addto-playlist-songtitle-title'>{chartinfo.title}</div>
                        </div>
                        <div className='addto-playlist-playlist-name'>
                        Added to: <span>{addedPlaylists}</span>
                        </div>
                    </div>
                    {playlists.map(playlist => <AddToPlaylistCard key={playlist.name} chartinfo={chartinfo} playlistinfo={playlist} />)}
                    <div className='create-new-button-content'>
                        <div className='create-new-button' onClick={openCreatePlaylistModal}>
                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="41" height="41" rx="20.5" stroke="#6C5CE7"/>
                                <path d="M21 14L21 28" stroke="#6C5CE7" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M28 21H14" stroke="#6C5CE7" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                            <div>Create New Playlist</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
