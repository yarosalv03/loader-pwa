import React from 'react'
import { useNavigate } from 'react-router-dom'
import bgPlaylist70 from '../assets/images/bg-playlist-70.png'
import '../styles/Library.css'

export default function LibraryPlaylist({ playlistinfo }) {
  const navigate = useNavigate();
  const go2PlaylistView = (name) => {
    navigate(`/playlist/${name}`);
  }
  const go2MusicPlaying = () => {
    navigate('/playing/'+playlistinfo.id);
  }
  return (
    <div className='library-playlist'>
      <div className='library-playlist-content'>
          <img src={bgPlaylist70} alt="bgPlaylist70" />
          <div className='library-playlist-info'>
              <div className='library-playlist-name'>{playlistinfo.name}</div>
              <div className='library-playlist-amount'>{playlistinfo.songs.length} Songs</div>
          </div>
      </div>
      <div className='library-playlist-action'>
        <div className='play-button' onClick={go2MusicPlaying}>
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.2" cx="21" cy="21" r="21" fill="#6C5CE7"/>
            <g clipPath="url(#clip0_25_15952)">
                <rect x="4" y="4" width="34" height="34" rx="17" fill="url(#paint0_radial_25_15952)"/>
                <path d="M23.8007 17.6858C25.4922 18.6014 26.338 19.0592 26.6165 19.6665C26.8591 20.1957 26.8591 20.8043 26.6165 21.3335C26.338 21.9408 25.4922 22.3986 23.8007 23.3142L21.7232 24.4387C20.1668 25.2811 19.3885 25.7024 18.7527 25.6231C18.1978 25.554 17.6973 25.2557 17.3723 24.8007C17 24.2792 17 23.3943 17 21.6245L17 19.3755C17 17.6057 17 16.7208 17.3723 16.1993C17.6973 15.7443 18.1978 15.446 18.7527 15.3769C19.3885 15.2976 20.1668 15.7189 21.7232 16.5613L23.8007 17.6858Z" fill="#F5F6FA"/>
            </g>
            <defs>
                <radialGradient id="paint0_radial_25_15952" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21 21) rotate(90) scale(53.5)">
                    <stop offset="0.109966" stopColor="#6C5CE7"/>
                    <stop offset="0.958736" stopColor="#3C3381"/>
                </radialGradient>
                <clipPath id="clip0_25_15952">
                    <rect x="4" y="4" width="34" height="34" rx="17" fill="white"/>
                </clipPath>
            </defs>
          </svg>
        </div>
        <div className='setting-button' onClick={() => go2PlaylistView(playlistinfo.name)}>
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 25C21.3956 25 21.7822 25.1173 22.1111 25.3371C22.44 25.5568 22.6964 25.8692 22.8478 26.2346C22.9991 26.6001 23.0387 27.0022 22.9616 27.3902C22.8844 27.7781 22.6939 28.1345 22.4142 28.4142C22.1345 28.6939 21.7781 28.8844 21.3902 28.9616C21.0022 29.0387 20.6001 28.9991 20.2346 28.8478C19.8692 28.6964 19.5568 28.44 19.3371 28.1111C19.1173 27.7822 19 27.3956 19 27C19 26.4696 19.2107 25.9609 19.5858 25.5858C19.9609 25.2107 20.4696 25 21 25ZM19 15C19 15.3956 19.1173 15.7822 19.3371 16.1111C19.5568 16.44 19.8692 16.6964 20.2346 16.8478C20.6001 16.9991 21.0022 17.0387 21.3902 16.9616C21.7781 16.8844 22.1345 16.6939 22.4142 16.4142C22.6939 16.1345 22.8844 15.7781 22.9616 15.3902C23.0387 15.0022 22.9991 14.6001 22.8478 14.2346C22.6964 13.8692 22.44 13.5568 22.1111 13.3371C21.7822 13.1173 21.3956 13 21 13C20.4696 13 19.9609 13.2107 19.5858 13.5858C19.2107 13.9609 19 14.4696 19 15ZM19 21C19 21.3956 19.1173 21.7822 19.3371 22.1111C19.5568 22.44 19.8692 22.6964 20.2346 22.8478C20.6001 22.9991 21.0022 23.0387 21.3902 22.9616C21.7781 22.8844 22.1345 22.6939 22.4142 22.4142C22.6939 22.1345 22.8844 21.7781 22.9616 21.3902C23.0387 21.0022 22.9991 20.6001 22.8478 20.2346C22.6964 19.8692 22.44 19.5568 22.1111 19.3371C21.7822 19.1173 21.3956 19 21 19C20.4696 19 19.9609 19.2107 19.5858 19.5858C19.2107 19.9609 19 20.4696 19 21Z" fill="#6C5CE7"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
