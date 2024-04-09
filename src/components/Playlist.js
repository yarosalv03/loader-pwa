import React, { useContext } from 'react'
import { ThemeContext } from '../Theme'
import bgPlaylist from '../assets/images/bg-playlist.png'
import '../styles/Home.css';

export default function Playlist() {
    const { theme } = useContext(ThemeContext);
  return (
    <div className='playlists-list'>
        {theme === 'light-theme' ? <svg width="287" height="92" viewBox="0 0 287 92" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', bottom: '-42px', left: '-20px' }}>
              <g filter="url(#filter0_f_117_8621)">
                <path d="M136.5 29L258 63L136.5 55.6486L15 63L136.5 29Z" fill="#141819"/>
              </g>
              <g filter="url(#filter1_f_117_8621)">
                <path d="M136.5 42L258 58L136.5 54.5405L15 58L136.5 42Z" fill="#141819" fillOpacity="0.17"/>
              </g>
              <defs>
                <filter id="filter0_f_117_8621" x="-14" y="0" width="301" height="92" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="14.5" result="effect1_foregroundBlur_117_8621"/>
                </filter>
                <filter id="filter1_f_117_8621" x="7" y="34" width="259" height="32" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_117_8621"/>
                </filter>
              </defs>
            </svg> : <svg width="287" height="92" viewBox="0 0 287 92" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_f_171_33390)">
                  <path d="M136.5 29L258 63L136.5 55.6486L15 63L136.5 29Z" fill="#0B0C0D"/>
              </g>
              <g filter="url(#filter1_f_171_33390)">
                  <path d="M136.5 42L258 58L136.5 54.5405L15 58L136.5 42Z" fill="#0B0C0D"/>
              </g>
              <defs>
                  <filter id="filter0_f_171_33390" x="-14" y="0" width="301" height="92" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="14.5" result="effect1_foregroundBlur_171_33390"/>
                  </filter>
                  <filter id="filter1_f_171_33390" x="7" y="34" width="259" height="32" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_171_33390"/>
                  </filter>
              </defs>
            </svg>}
            <img className='playlist-image' src={bgPlaylist} alt="bg-playlist" width="100%" height="100%" />
            <div className='playlist-info'>
              <div className='playlist-label'>
                <div className='playlist-name'>Playlist Name</div>
                <div className='playlist-number'>100 Songs</div>
              </div>
              <div className='playlist-play-button'>
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle opacity="0.2" cx="21" cy="21" r="21" fill="#6C5CE7"/>
                  <g clipPath="url(#clip0_128_8696)">
                      <rect x="4" y="4" width="34" height="34" rx="17" fill="url(#paint0_radial_128_8696)"/>
                      <path d="M23.8007 17.6858C25.4922 18.6014 26.338 19.0592 26.6165 19.6665C26.8591 20.1957 26.8591 20.8043 26.6165 21.3335C26.338 21.9408 25.4922 22.3986 23.8007 23.3142L21.7232 24.4387C20.1668 25.2811 19.3885 25.7024 18.7527 25.6231C18.1978 25.554 17.6973 25.2557 17.3723 24.8007C17 24.2792 17 23.3943 17 21.6245L17 19.3755C17 17.6057 17 16.7208 17.3723 16.1993C17.6973 15.7443 18.1978 15.446 18.7527 15.3769C19.3885 15.2976 20.1668 15.7189 21.7232 16.5613L23.8007 17.6858Z" fill="#F5F6FA"/>
                  </g>
                  <defs>
                      <radialGradient id="paint0_radial_128_8696" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21 21) rotate(90) scale(53.5)">
                          <stop offset="0.109966" stopColor="#6C5CE7"/>
                          <stop offset="0.958736" stopColor="#3C3381"/>
                      </radialGradient>
                      <clipPath id="clip0_128_8696">
                          <rect x="4" y="4" width="34" height="34" rx="17" fill="white"/>
                      </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: '16px', right: '20px', zIndex: '10', cursor: 'pointer' }}>
              <path d="M2 12C2.39556 12 2.78224 12.1173 3.11114 12.3371C3.44004 12.5568 3.69638 12.8692 3.84776 13.2346C3.99913 13.6001 4.03874 14.0022 3.96157 14.3902C3.8844 14.7781 3.69392 15.1345 3.41421 15.4142C3.13451 15.6939 2.77814 15.8844 2.39018 15.9616C2.00222 16.0387 1.60009 15.9991 1.23463 15.8478C0.869181 15.6964 0.556824 15.44 0.337061 15.1111C0.117298 14.7822 -7.01322e-08 14.3956 -8.74228e-08 14C-1.10609e-07 13.4696 0.210714 12.9609 0.585787 12.5858C0.960859 12.2107 1.46957 12 2 12ZM-6.11959e-07 2C-5.94669e-07 2.39556 0.117298 2.78224 0.33706 3.11114C0.556823 3.44004 0.869181 3.69638 1.23463 3.84776C1.60008 3.99913 2.00222 4.03874 2.39018 3.96157C2.77814 3.8844 3.13451 3.69392 3.41421 3.41421C3.69392 3.13451 3.8844 2.77814 3.96157 2.39018C4.03874 2.00222 3.99913 1.60009 3.84776 1.23463C3.69638 0.869181 3.44004 0.556825 3.11114 0.337062C2.78224 0.117299 2.39556 -1.04713e-07 2 -8.74228e-08C1.46957 -6.42368e-08 0.960859 0.210715 0.585786 0.585788C0.210713 0.96086 -6.35145e-07 1.46957 -6.11959e-07 2ZM-3.49691e-07 8C-3.32401e-07 8.39556 0.117298 8.78224 0.337061 9.11114C0.556823 9.44004 0.869181 9.69638 1.23463 9.84776C1.60009 9.99913 2.00222 10.0387 2.39018 9.96157C2.77814 9.8844 3.13451 9.69392 3.41421 9.41421C3.69392 9.13451 3.8844 8.77814 3.96157 8.39018C4.03874 8.00222 3.99913 7.60009 3.84776 7.23463C3.69638 6.86918 3.44004 6.55682 3.11114 6.33706C2.78224 6.1173 2.39556 6 2 6C1.46957 6 0.960859 6.21071 0.585786 6.58579C0.210714 6.96086 -3.72877e-07 7.46957 -3.49691e-07 8Z" fill="#6C5CE7"/>
          </svg>
    </div>
  )
}
