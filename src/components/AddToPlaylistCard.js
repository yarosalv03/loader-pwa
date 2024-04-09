import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import bgPlaylist70 from '../assets/images/bg-playlist-70.png'
import addedSong from '../assets/images/addedSong.png'
import { getPlaylists } from '../reducers/playlistsSlice'
import '../styles/Home.css'

export default function AddToPlaylistCard({ playlistinfo, chartinfo }) {
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);
  const updateLocalStorage = (isAdding) => {
    const playlists = JSON.parse(localStorage.getItem('playlists')) || [];
    const updatedPlaylists = playlists.map(playlist => {
      if (playlist.name === playlistinfo.name) {
        if (isAdding) {
          return {
            ...playlist,
            songs: [...playlist.songs, chartinfo]
          };
        } else {
          return {
            ...playlist,
            songs: playlist.songs.filter(song => song.title !== chartinfo.title)
          };
        }
      }
      return playlist;
    });
    localStorage.setItem('playlists', JSON.stringify(updatedPlaylists));
    dispatch(getPlaylists(updatedPlaylists));
  }
  const addSong = () => {
    updateLocalStorage(true);
    setIsAdded(true);
  }
  const removeSong = () => {
    updateLocalStorage(false);
    setIsAdded(false);
  }
  useEffect(() => {
    for (let song of playlistinfo.songs) {
      if (song.title === chartinfo.title) {
          setIsAdded(true);
          return;
      }
    }
  }, [playlistinfo, chartinfo]);
  return (    
    <div className='addto-playlist-card'>
      <div className='addto-playlist-card-content'>
          {!isAdded ? <img src={bgPlaylist70} alt="bgPlaylist70" /> :
          <img src={addedSong} alt="addedSong" />}
          <div className='addto-playlist-card-info'>
              <div className='addto-playlist-card-name'>{playlistinfo.name}</div>
              <div className='addto-playlist-card-amount'>{playlistinfo.songs.length} Songs</div>
          </div>
      </div>
      <div className='addto-playlist-card-action'>
        {!isAdded ? <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={addSong}>
            <rect x="0.5" y="0.5" width="41" height="41" rx="20.5" stroke="#6C5CE7"/>
            <path d="M21 14L21 28" stroke="#6C5CE7" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M28 21H14" stroke="#6C5CE7" strokeWidth="1.5" strokeLinecap="round"/>
        </svg> :
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={removeSong}>
            <rect x="0.5" y="0.5" width="41" height="41" rx="20.5" stroke="#F46E6E"/>
            <path d="M28 21H14" stroke="#F46E6E" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>}
      </div>
    </div>
  )
}
