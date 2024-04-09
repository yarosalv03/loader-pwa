import React from 'react'
import '../styles/PlaylistView.css'

export default function MusicPlayingSonglist({songinfo, isPlaying, songNo, idx}) {
  return (
    <div className='playlistview-songlist'>
      <div className='playlistview-songlist-content'>
          <img src={songinfo.image} alt="bgPlaylist60" />
          <div className='playlistview-songlist-info'>
              <div className='playlistview-songlist-name'>{songinfo.name}</div>
              <div className='playlistview-songlist-title'>{songinfo.title}</div>
          </div>
      </div>
      {isPlaying && songNo === idx && <div className='playing-animation'>
          <svg className='playing-animation-1' width="3" height="9" viewBox="0 0 3 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.202148" width="2.25532" height="8.45745" rx="1.12766" fill="#F5F6FA"/>
          </svg>
          <svg className='playing-animation-2' width="3" height="21" viewBox="0 0 3 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.638306" width="2.25532" height="20.8617" rx="1.12766" fill="#F5F6FA"/>
          </svg>
          <svg className='playing-animation-3' width="3" height="15" viewBox="0 0 3 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.276611" y="0.382812" width="2.25532" height="14.0957" rx="1.12766" fill="#F5F6FA"/>
          </svg>
          <svg className='playing-animation-4' width="4" height="21" viewBox="0 0 4 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.914917" width="2.25532" height="20.8617" rx="1.12766" fill="#F5F6FA"/>
          </svg>
          <svg className='playing-animation-5' width="3" height="7" viewBox="0 0 3 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.553223" y="0.32959" width="2.25532" height="6.20213" rx="1.12766" fill="#F5F6FA"/>
          </svg>
      </div>}
      <div className='playlistview-songlist-action'>
        <div className='trash-button'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6.38597C3 5.90152 3.34538 5.50879 3.77143 5.50879L6.43567 5.50832C6.96502 5.49306 7.43202 5.11033 7.61214 4.54412C7.61688 4.52923 7.62232 4.51087 7.64185 4.44424L7.75665 4.05256C7.8269 3.81241 7.8881 3.60318 7.97375 3.41617C8.31209 2.67736 8.93808 2.16432 9.66147 2.03297C9.84457 1.99972 10.0385 1.99986 10.2611 2.00002H13.7391C13.9617 1.99986 14.1556 1.99972 14.3387 2.03297C15.0621 2.16432 15.6881 2.67736 16.0264 3.41617C16.1121 3.60318 16.1733 3.81241 16.2435 4.05256L16.3583 4.44424C16.3778 4.51087 16.3833 4.52923 16.388 4.54412C16.5682 5.11033 17.1278 5.49353 17.6571 5.50879H20.2286C20.6546 5.50879 21 5.90152 21 6.38597C21 6.87043 20.6546 7.26316 20.2286 7.26316H3.77143C3.34538 7.26316 3 6.87043 3 6.38597Z" fill="#F46E6E"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M11.5956 22.0001H12.4044C15.1871 22.0001 16.5785 22.0001 17.4831 21.1142C18.3878 20.2283 18.4803 18.7751 18.6654 15.8686L18.9321 11.6807C19.0326 10.1037 19.0828 9.31524 18.6289 8.81558C18.1751 8.31592 17.4087 8.31592 15.876 8.31592H8.12404C6.59127 8.31592 5.82488 8.31592 5.37105 8.81558C4.91722 9.31524 4.96744 10.1037 5.06788 11.6807L5.33459 15.8686C5.5197 18.7751 5.61225 20.2283 6.51689 21.1142C7.42153 22.0001 8.81289 22.0001 11.5956 22.0001ZM10.2463 12.1886C10.2051 11.7548 9.83753 11.4382 9.42537 11.4816C9.01321 11.525 8.71251 11.9119 8.75372 12.3457L9.25372 17.6089C9.29494 18.0427 9.66247 18.3593 10.0746 18.3159C10.4868 18.2725 10.7875 17.8856 10.7463 17.4518L10.2463 12.1886ZM14.5746 11.4816C14.9868 11.525 15.2875 11.9119 15.2463 12.3457L14.7463 17.6089C14.7051 18.0427 14.3375 18.3593 13.9254 18.3159C13.5132 18.2725 13.2125 17.8856 13.2537 17.4518L13.7537 12.1886C13.7949 11.7548 14.1625 11.4382 14.5746 11.4816Z" fill="#F46E6E"/>
            </svg>
        </div>
        <div className='play-button'>
          {(isPlaying && songNo === idx) ? <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle opacity="0.2" cx="21" cy="21" r="21" fill="#6C5CE7"/>
              <g clipPath="url(#clip0_52_5258)">
                  <rect x="4" y="4" width="34" height="34" rx="17" fill="url(#paint0_radial_52_5258)"/>
                  <rect x="16.5" y="15.3641" width="3" height="10.6667" rx="1.5" fill="#F5F6FA"/>
                  <rect x="22.5" y="15.3641" width="3" height="10.6667" rx="1.5" fill="#F5F6FA"/>
              </g>
              <defs>
                  <radialGradient id="paint0_radial_52_5258" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21 21) rotate(90) scale(53.5)">
                      <stop offset="0.109966" stopColor="#6C5CE7"/>
                      <stop offset="0.958736" stopColor="#3C3381"/>
                  </radialGradient>
                  <clipPath id="clip0_52_5258">
                  <rect x="4" y="4" width="34" height="34" rx="17" fill="white"/>
                  </clipPath>
              </defs>
          </svg> :
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
          </svg>}
        </div>
      </div>
    </div>
  )
}
