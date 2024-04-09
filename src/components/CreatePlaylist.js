import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4} from 'uuid';
import { getPlaylists } from '../reducers/playlistsSlice';
import '../styles/Library.css'

export default function CreatePlaylist({setPlaylists, closeModal}) {
    const uuid = uuidv4();
    const dispatch = useDispatch();
    const [playlistName, setPlaylistName] = useState('');
    const changePlaylistName = (e) => {
        setPlaylistName(e.target.value);
    }
    const createPlaylist = () => {
        let playlists = JSON.parse(localStorage.getItem('playlists')) || [];
        for (let playlist of playlists) {
            if (playlist.name === playlistName) {
                alert('Playlist with same name already exists!');
                return;
            }
        }
        playlists.push({"id": uuid, "name": playlistName, songs: []});
        setPlaylists(playlists);
        localStorage.setItem('playlists', JSON.stringify(playlists));
        dispatch(getPlaylists(playlists));
        closeModal();
    }
    return (
        <div className='create-playlist'>
            <div className='create-playlist-overlap' />
            <div className='create-playlist-modal'>
                <div className='create-playlist-title'>
                    <div>Create Playlist</div>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={closeModal}>
                        <path d="M17 1L1 17M17 17L1 1" stroke="#8391A1" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                </div>
                <input type="text" className='create-playlist-input' placeholder='Your Playlist Name...' value={playlistName} onChange={changePlaylistName} />
                <button className='create-playlist-button' onClick={createPlaylist}>
                    <div>Create</div>
                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.53336 1C1.18249 1 0.900024 1.2676 0.900024 1.6C0.900024 1.9324 1.18249 2.2 1.53336 2.2H11.0334C11.3842 2.2 11.6667 1.9324 11.6667 1.6C11.6667 1.2676 11.3842 1 11.0334 1H1.53336ZM1.53336 5.2C1.18249 5.2 0.900024 5.4676 0.900024 5.8C0.900024 6.1324 1.18249 6.4 1.53336 6.4H12.9334C13.2842 6.4 13.5667 6.1324 13.5667 5.8C13.5667 5.4676 13.2842 5.2 12.9334 5.2H1.53336ZM12.9012 8.20234C12.5312 8.20234 12.2679 8.52928 12.2679 8.89923V10.573H10.4342C10.0815 10.573 9.76669 10.8204 9.76669 11.173C9.76669 11.5257 10.0815 11.773 10.4342 11.773H12.2679V13.4457C12.2679 13.8156 12.5312 14.1426 12.9012 14.1426C13.2711 14.1426 13.5345 13.8156 13.5345 13.4457V11.773H15.3694C15.7221 11.773 16.0369 11.5258 16.0369 11.173C16.0369 10.8203 15.7221 10.573 15.3694 10.573H13.5345V8.89923C13.5345 8.52928 13.2711 8.20234 12.9012 8.20234ZM1.53336 9.4C1.18249 9.4 0.900024 9.6676 0.900024 10C0.900024 10.3324 1.18249 10.6 1.53336 10.6H7.86669C8.21756 10.6 8.50002 10.3324 8.50002 10C8.50002 9.6676 8.21756 9.4 7.86669 9.4H1.53336Z" fill="#F5F6FA" stroke="#F5F6FA" strokeWidth="0.5"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}
