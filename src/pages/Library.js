import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Menu from '../components/Menu'
import BottomMenu from '../components/BottomMenu'
import LibraryPlaylist from '../components/LibraryPlaylist'
import LibrarySonglist from '../components/LibrarySonglist'
import PlayWidget from '../components/PlayWidget'
import CreatePlaylist from '../components/CreatePlaylist'
import '../styles/Library.css'
import { getPlaylists } from '../reducers/playlistsSlice'
import { getSongs } from '../reducers/songsSlice'

export default function Library() {
  const navigate = useNavigate();
  const playlists = useSelector(state => state.playlists.playlists);
  const songs = useSelector(state => state.songs.songs);
  const dispatch = useDispatch();
  const [tabStatus, setTabStatus] = useState(0);
  const [selectedSubTab, setSelectedSubTab] = useState('all');
  const [isOpenedCreatePlaylistModal, setIsOpenedCreatePlaylistModal] = useState(false);
  const [displaySongs, setDisplaySongs] = useState(songs);
  const filterSongsByPlaylists = () => {
    const playlistSongTitles = [];
    playlists.forEach(playlist => {
        playlist.songs.forEach(song => {
          playlistSongTitles.push(song.title);
        });
    });
    const songsInPlaylists = songs.filter(song => playlistSongTitles.includes(song.title));
    const songsNotInPlaylists = songs.filter(song => !playlistSongTitles.includes(song.title));
    return { songsInPlaylists, songsNotInPlaylists };
  }
  const go2Search = () => {
    navigate('/search');
  }
  const openCreatePlaylistModal = () => {
    setIsOpenedCreatePlaylistModal(true);
  }
  const closeCreatePlaylistModal = () => {
    setIsOpenedCreatePlaylistModal(false);
  }
  const setPlaylist = () => {
      setTabStatus(0);
  }
  const setAllSongs = () => {
      setTabStatus(1);
  }
  const setAllTab = () => {
    setDisplaySongs(songs);
    setSelectedSubTab('all');
  }
  const setPlaylistTab = () => {
    const { songsInPlaylists } = filterSongsByPlaylists();
    setDisplaySongs(songsInPlaylists);
    setSelectedSubTab('playlist');
  }
  const setNotPlaylistTab = () => {
    const { songsNotInPlaylists } = filterSongsByPlaylists();
    setDisplaySongs(songsNotInPlaylists);
    setSelectedSubTab('notplaylist');
  }
  const setPlaylists = (playlists) => {
    dispatch(getPlaylists(playlists));
  }
  useEffect(() => {
    dispatch(getPlaylists(JSON.parse(localStorage.getItem('playlists')) || []));
    dispatch(getSongs(JSON.parse(localStorage.getItem('songs')) || []));
  }, [dispatch]);
  return (
    <div className='Library'>
      <div className='library-header'>
        <Menu />
        <div className='library-title'>Library</div>
        <div></div>
      </div>
      <div className='library-tab'>
          <div className='tab playlists-tab' onClick={setPlaylist}>
              {tabStatus === 1 ? <div>Playlists ({playlists.length})</div> :
              <button className='tab-button'>Playlists ({playlists.length})</button>}
          </div>
          <div className='tab all-songs-tab' onClick={setAllSongs}>
              {tabStatus === 0 ? <div>All Songs ({songs.length})</div> :
              <button className='tab-button'>All Songs ({songs.length})</button>}
          </div>
      </div>
      <div className='library-search'>
        <input type="text" placeholder='Search in Library' />
        <span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.58332 17.5C13.9556 17.5 17.5 13.9556 17.5 9.58335C17.5 5.2111 13.9556 1.66669 9.58332 1.66669C5.21107 1.66669 1.66666 5.2111 1.66666 9.58335C1.66666 13.9556 5.21107 17.5 9.58332 17.5Z" stroke="#8391A1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.3333 18.3334L16.6667 16.6667" stroke="#8391A1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
      {tabStatus === 0 ? <div className='library-playlists'>
        <div className='library-playlists-label-container'>
          <div className='library-playlists-label'>{playlists.length} Playlists</div>
          <div className='add-new-button' onClick={openCreatePlaylistModal}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#6C5CE7"/>
              <path d="M12 9.5L12 14.5" stroke="#6C5CE7" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M14.5 12H9.5" stroke="#6C5CE7" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <div>Add New</div>
          </div>
        </div>
        <div className='library-playlists-container'>
          {playlists.map(item => <LibraryPlaylist key={item.name} playlistinfo={item} />)}
        </div>
        <div className='create-new-button-container'>
          <div className='create-new-button' onClick={openCreatePlaylistModal}>
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="41" height="41" rx="20.5" stroke="#6C5CE7"/>
              <path d="M21 14L21 28" stroke="#6C5CE7" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M28 21H14" stroke="#6C5CE7" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <div>Create New Playlist</div>
          </div>
        </div>
      </div> :
      <div className='library-all-songs'>
        <div className='library-all-songs-label-container'>
          <div className='library-all-songs-label'>{displaySongs.length} Songs</div>
          <div className='add-new-button' onClick={go2Search}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#6C5CE7"/>
              <path d="M12 9.5L12 14.5" stroke="#6C5CE7" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M14.5 12H9.5" stroke="#6C5CE7" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <div>Add Songs</div>
          </div>
        </div>
        <div className='library-sub-tab'>
            <div className={`${selectedSubTab === 'all' ? 'tab-btn selected-tab' : 'tab-btn unselected-tab'}`} onClick={setAllTab}>All</div>
            <div className={`${selectedSubTab === 'playlist' ? 'tab-btn selected-tab' : 'tab-btn unselected-tab'}`} onClick={setPlaylistTab}>In The Playlist</div>
            <div className={`${selectedSubTab === 'notplaylist' ? 'tab-btn selected-tab' : 'tab-btn unselected-tab'}`} onClick={setNotPlaylistTab}>Not In The Playlist</div>
        </div>
        <div className='library-all-songs-container'>
          {displaySongs.map(song => <LibrarySonglist key={song.id} songinfo={song} />)}
        </div>
        <div className='create-new-button-container'>
          <div className='create-new-button' onClick={go2Search} style={{ marginBottom: '94px' }}>
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="41" height="41" rx="20.5" stroke="#6C5CE7"/>
              <path d="M21 14L21 28" stroke="#6C5CE7" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M28 21H14" stroke="#6C5CE7" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <div>Add Songs</div>
          </div>
        </div>
      </div>}
      {isOpenedCreatePlaylistModal && <CreatePlaylist closeModal={closeCreatePlaylistModal} setPlaylists={setPlaylists} />}
      {tabStatus === 1 && <PlayWidget />}
      <BottomMenu />
    </div>
  )
}
