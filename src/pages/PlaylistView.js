import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import PlaylistViewSonglist from '../components/PlaylistViewSonglist'
import BottomMenu from '../components/BottomMenu'
import BackButton from '../components/BackButton'
import '../styles/PlaylistView.css'

export default function PlaylistView() {
    const { playlistname } = useParams();
    const playlists = useSelector(state => state.playlists.playlists);
    const playlist = playlists.filter(item => item.name === playlistname)[0];
    return (
        <div className='playlist-view'>
            <div className='playlistview-header'>
                <BackButton />
                <div className='playlistview-info'>
                    <div className='playlistview-name'>User Name</div>
                    <div className='playlistview-title'>{playlistname}</div>
                </div>
            </div>
            <div className='playlistview-playlists'>
                <div className='playlistview-playlists-label-container'>
                    <div className='playlistview-playlists-label'>{playlist.songs.length} Songs</div>
                    <div className='add-new-button'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#6C5CE7"/>
                        <path d="M12 9.5L12 14.5" stroke="#6C5CE7" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M14.5 12H9.5" stroke="#6C5CE7" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        <div>Add Songs</div>
                    </div>
                </div>
                <div className='playlistview-songlist-container'>
                    {playlist.songs.map(item => <PlaylistViewSonglist key={item.id} songinfo={item} playlistname={playlistname} />)}
                </div>
                <div className='create-new-button-container'>
                    <div className='create-new-button'>
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="41" height="41" rx="20.5" stroke="#6C5CE7"/>
                        <path d="M21 14L21 28" stroke="#6C5CE7" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M28 21H14" stroke="#6C5CE7" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        <div>Add Songs</div>
                    </div>
                </div>
            </div>
            <BottomMenu />
        </div>
    )
}
