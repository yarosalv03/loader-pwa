import React, { useContext, useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ThemeContext } from '../Theme'
import BackButton from '../components/BackButton'
import MusicPlayingSonglist from '../components/MusicPlayingSonglist'
import HideButton from '../components/HideButton'
import playingImage from '../assets/images/playing.png'
import playingImage1 from '../assets/images/playing1.png'
import '../styles/MusicPlaying.css'

export default function MusicPlaying() {
  const { id } = useParams();
  const { theme } = useContext(ThemeContext);
  const playlists = useSelector(state => state.playlists.playlists);
  const songs = useSelector(state => state.songs.songs);
  const audioRef = useRef(null);
  const [songNo, setSongNo] = useState(0);
  const [musicSrc, setMusicSrc] = useState('');
  const [isShownSongs, setShowSongs] = useState(false);
  const [songsInPlaylist, setSongsInPlaylist] = useState([]);
  const [currentSongName, setCurrentSongName] = useState('');
  const [currentSongTitle, setCurrentSongTitle] = useState('');
  const [seconds, setSeconds] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currTime, setCurrTime] = useState({
    min: "00",
    sec: "00",
  });
  const [allTime, setAllTime] = useState({
    min: "00",
    sec: "00"
  })
  const formatNum = (num) => {
    return num < 10 ? '0'+num : ''+num;
  }
  const playingButton = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
  };
  const timeUpdateHandler = (e) => {
    const roundedCurrent = Math.round(e.target.currentTime);
    const roundedDuration = Math.round(e.target.duration ? e.target.duration : 0);
    setSeconds(roundedCurrent);
    setDuration(roundedDuration);
    setAllTime({
      min: roundedDuration ? Math.floor(roundedDuration / 60) : 0,
      sec: roundedDuration ? roundedDuration % 60 : 0
    });
    setCurrTime({
      min: Math.floor(roundedCurrent / 60),
      sec: roundedCurrent % 60
    });
  };
  const showSongs = () => {
    setShowSongs(true);
  }
  const hideSongs = () => {
    setShowSongs(false);
  }
  const goNext = () => {
    const no = (songNo + 1) % songsInPlaylist.length;
    const current = songsInPlaylist[no];
    const currentSongDetail = songs.find(song => song.title === current.title);
    setIsPlaying(false);
    setSongNo(no);
    setCurrentSongName(current.name);
    setCurrentSongTitle(current.title);
    setMusicSrc(currentSongDetail.audioUrl);
  }
  const goPrev = () => {
    const no = (songNo + songsInPlaylist.length - 1) % songsInPlaylist.length;
    const current = songsInPlaylist[no];
    const currentSongDetail = songs.find(song => song.title === current.title);
    setIsPlaying(false);
    setSongNo(no);
    setCurrentSongName(current.name);
    setCurrentSongTitle(current.title);
    setMusicSrc(currentSongDetail.audioUrl);
  }
  useEffect(() => {
    const selectedPlaylist = playlists.find(item => item.id === id);
    const current = selectedPlaylist.songs[0];
    const currentSongDetail = songs.find(song => song.title === current.title);
    setSongsInPlaylist(selectedPlaylist.songs);
    setSongNo(0);
    setCurrentSongName(current.name);
    setCurrentSongTitle(current.title);
    setMusicSrc(currentSongDetail.audioUrl);
  }, [id, playlists, songs]);
  return (
    <div className='MusicPlaying'>
      <div className='musicplaying-header'>
        <div className='musicplaying-title-container'>
          <BackButton />
          <div className='musicplaying-title'>Playing Now</div>
        </div>
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={showSongs} stylep={{ cursor: 'pointer' }}>
          <path d="M17.25 14.375V1.25C17.25 1.25 21 2.5 21 6.25M12.25 2.5H1M12.25 7.5H1M6 12.5H1M17.25 15.5C17.25 17.125 15.625 18.5 13.5 18.5C11.375 18.5 9.75 17.25 9.75 15.5C9.75 13.875 11.375 12.5 13.5 12.5C15.625 12.5 17.25 13.75 17.25 15.5Z" stroke="#8391A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className='musicplaying-container'>
        <div className='musicplaying-playing'>
          <img className='musicplaying-image1' src={playingImage1} alt="playingImage1" />
          <img className='musicplaying-image1' src={playingImage1} alt="playingImage1" />
          <svg className='musicplaying-left-shadow' width="60" height="231" viewBox="0 0 60 231" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_43_18430)">
                <ellipse cx="30" cy="115.5" rx="14" ry="99.5" fill="#06070A"/>
            </g>
            <defs>
                <filter id="filter0_f_43_18430" x="0.6" y="0.6" width="58.8" height="229.8" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="7.7" result="effect1_foregroundBlur_43_18430"/>
                </filter>
            </defs>
          </svg>
          <svg className='musicplaying-right-shadow' width="60" height="231" viewBox="0 0 60 231" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_43_18430)">
                <ellipse cx="30" cy="115.5" rx="14" ry="99.5" fill="#06070A"/>
            </g>
            <defs>
                <filter id="filter0_f_43_18430" x="0.6" y="0.6" width="58.8" height="229.8" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="7.7" result="effect1_foregroundBlur_43_18430"/>
                </filter>
            </defs>
          </svg>
          {theme === 'light-theme' ? <svg className='music-playing-bottom-shadow1' width="375" height="92" viewBox="0 0 375 92" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_41_18424)">
                <path d="M188 29L355 63L188 55.6486L21 63L188 29Z" fill="#141819"/>
            </g>
            <defs>
                <filter id="filter0_f_41_18424" x="-8" y="0" width="392" height="92" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="14.5" result="effect1_foregroundBlur_41_18424"/>
                </filter>
            </defs>
          </svg> : <svg className='music-playing-bottom-shadow1' width="375" height="92" viewBox="0 0 375 92" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_f_171_35354)">
                  <path d="M188 29L355 63L188 55.6486L21 63L188 29Z" fill="black"/>
              </g>
              <defs>
                  <filter id="filter0_f_171_35354" x="-8" y="0" width="392" height="92" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="14.5" result="effect1_foregroundBlur_171_35354"/>
                  </filter>
              </defs>
          </svg>}
          {theme === 'light-theme' ? <svg className='music-playing-bottom-shadow2' width="350" height="32" viewBox="0 0 350 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_f_43_18470)">
                  <path d="M175 8L342 24L175 20.5405L8 24L175 8Z" fill="#141819" fillOpacity="0.17"/>
              </g>
              <defs>
                  <filter id="filter0_f_43_18470" x="0" y="0" width="350" height="32" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_43_18470"/>
                  </filter>
              </defs>
          </svg> : <svg className='music-playing-bottom-shadow2' width="375" height="64" viewBox="0 0 375 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_f_171_35355)">
                  <path d="M188 24L355 40L188 36.5405L21 40L188 24Z" fill="black"/>
              </g>
              <defs>
                  <filter id="filter0_f_171_35355" x="-3" y="0" width="382" height="64" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="12" result="effect1_foregroundBlur_171_35355"/>
                  </filter>
              </defs>
          </svg>}
          <img className='musicplaying-image' src={playingImage} alt="playingImage" />
        </div>
        <div className='musicplaying-songinfo'>
          <div className='musicplaying-title'>{currentSongName}</div>
          <div className='musicplaying-name'>{currentSongTitle}</div>
          <div className='musicplaying-amount'>{formatNum(songNo+1)} / {formatNum(songsInPlaylist.length)}</div>
        </div>
      </div>
      <div className='musicplaying-actions'>
        <div className='musicplaying-progressbar'>
          <input
            className="musicplaying-timeline"
            type="range"
            min="0"
            max={duration}
            default="0"
            value={seconds}
            onChange={dragHandler}
          />
        </div>
        <div className='musicplaying-time'>
            <div className='musicplaying-starttime'>{formatNum(currTime.min)} : {formatNum(currTime.sec)}</div>
            <div className='musicplaying-endtime'>{formatNum(allTime.min)} : {formatNum(allTime.sec)}</div>
        </div>
        <div className='musicplaying-controls'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.99996 7H17V8.79C17 9.24 17.54 9.46 17.85 9.14L20.64 6.35C20.84 6.15 20.84 5.84 20.64 5.64L17.85 2.85C17.7795 2.7809 17.6901 2.73421 17.5931 2.71582C17.4961 2.69743 17.3959 2.70816 17.305 2.74665C17.2141 2.78515 17.1366 2.8497 17.0823 2.93215C17.028 3.01461 16.9994 3.11129 17 3.21V5H5.99996C5.44996 5 4.99996 5.45 4.99996 6V10C4.99996 10.55 5.44996 11 5.99996 11C6.54996 11 6.99996 10.55 6.99996 10V7ZM17 17H6.99996V15.21C6.99996 14.76 6.45996 14.54 6.14996 14.86L3.35996 17.65C3.15996 17.85 3.15996 18.16 3.35996 18.36L6.14996 21.15C6.22046 21.2191 6.30983 21.2658 6.40682 21.2842C6.5038 21.3026 6.60407 21.2918 6.69497 21.2533C6.78587 21.2148 6.86333 21.1503 6.91761 21.0678C6.97189 20.9854 7.00054 20.8887 6.99996 20.79V19H18C18.55 19 19 18.55 19 18V14C19 13.45 18.55 13 18 13C17.45 13 17 13.45 17 14V17Z" fill="#6C5CE7"/>
            </svg>
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={goPrev}>
                <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M10.0001 4.9376V3.04442C10.0001 2.07804 10.0001 1.59484 9.79849 1.32752C9.62282 1.0946 9.3542 0.950021 9.06304 0.931666C8.72886 0.910597 8.32555 1.17671 7.51893 1.70894L2.00003 5.35047V2.50008C2.00003 1.9478 1.55232 1.50009 1.00003 1.50009C0.447748 1.50009 3.24249e-05 1.9478 3.24249e-05 2.50009V11.5001C3.24249e-05 12.0524 0.447748 12.5001 1.00003 12.5001C1.55232 12.5001 2.00003 12.0524 2.00003 11.5001V8.6495L7.51893 12.291C8.32555 12.8233 8.72886 13.0894 9.06304 13.0683C9.3542 13.05 9.62282 12.9054 9.79849 12.6725C10.0001 12.4051 10.0001 11.9219 10.0001 10.9556V9.06233L14.8933 12.291C15.6999 12.8232 16.1033 13.0894 16.4374 13.0683C16.7286 13.0499 16.9972 12.9053 17.1729 12.6724C17.3745 12.4051 17.3745 11.9219 17.3745 10.9555V3.0444C17.3745 2.07801 17.3745 1.59482 17.1729 1.32749C16.9972 1.09458 16.7286 0.949997 16.4374 0.931641C16.1033 0.910573 15.6999 1.17669 14.8933 1.70892L10.0001 4.9376Z" fill="#8391A1"/>
            </svg>
            {isPlaying ? <svg width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={playingButton}>
                <circle opacity="0.2" cx="35.3745" cy="35" r="35" fill="#6C5CE7"/>
                <rect x="7.04126" y="6.66666" width="56.6667" height="56.6667" rx="28.3333" fill="url(#paint0_radial_37_18382)"/>
                <rect x="28.0002" y="27" width="4.66658" height="16.5923" rx="2.33329" fill="#F5F6FA"/>
                <rect x="37.3333" y="27" width="4.66658" height="16.5923" rx="2.33329" fill="#F5F6FA"/>
                <defs>
                    <radialGradient id="paint0_radial_37_18382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(35.3746 35) rotate(90) scale(89.1667)">
                        <stop offset="0.109966" stopColor="#6C5CE7"/>
                        <stop offset="0.958736" stopColor="#3C3381"/>
                    </radialGradient>
                </defs>
            </svg> :
            <svg width="71" height="70" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={playingButton}>
              <circle opacity="0.2" cx="21" cy="21" r="21" fill="#6C5CE7"/>
              <g clipPath="url(#clip0_171_34472)">
                  <rect x="4" y="4" width="34" height="34" rx="17" fill="url(#paint0_radial_171_34472)"/>
                  <path d="M23.8007 17.6858C25.4922 18.6014 26.338 19.0592 26.6165 19.6665C26.8591 20.1957 26.8591 20.8043 26.6165 21.3335C26.338 21.9408 25.4922 22.3986 23.8007 23.3142L21.7232 24.4387C20.1668 25.2811 19.3885 25.7024 18.7527 25.6231C18.1978 25.554 17.6973 25.2557 17.3723 24.8007C17 24.2792 17 23.3943 17 21.6245L17 19.3755C17 17.6057 17 16.7208 17.3723 16.1993C17.6973 15.7443 18.1978 15.446 18.7527 15.3769C19.3885 15.2976 20.1668 15.7189 21.7232 16.5613L23.8007 17.6858Z" fill="#F5F6FA"/>
              </g>
              <defs>
                  <radialGradient id="paint0_radial_171_34472" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21 21) rotate(90) scale(53.5)">
                  <stop offset="0.109966" stopColor="#6C5CE7"/>
                  <stop offset="0.958736" stopColor="#3C3381"/>
                  </radialGradient>
                  <clipPath id="clip0_171_34472">
                  <rect x="4" y="4" width="34" height="34" rx="17" fill="white"/>
                  </clipPath>
              </defs>
            </svg>}
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={goNext}>
                <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M7.7489 4.93762V3.04445C7.7489 2.07806 7.7489 1.59487 7.95053 1.32754C8.12621 1.09463 8.39483 0.950046 8.68598 0.93169C9.02016 0.910622 9.42347 1.17674 10.2301 1.70897L15.749 5.3505V2.50011C15.749 1.94782 16.1967 1.50011 16.749 1.50011C17.3013 1.50011 17.749 1.94783 17.749 2.50011V11.5001C17.749 12.0524 17.3013 12.5001 16.749 12.5001C16.1967 12.5001 15.749 12.0524 15.749 11.5001V8.64953L10.2301 12.2911C9.42347 12.8233 9.02016 13.0894 8.68598 13.0683C8.39483 13.05 8.12621 12.9054 7.95053 12.6725C7.7489 12.4052 7.7489 11.922 7.7489 10.9556V9.06236L2.8557 12.291C2.04908 12.8233 1.64577 13.0894 1.31159 13.0683C1.02044 13.05 0.751816 12.9054 0.576143 12.6725C0.374512 12.4051 0.374512 11.9219 0.374512 10.9556V3.04442C0.374512 2.07804 0.374512 1.59484 0.576144 1.32752C0.751816 1.09461 1.02044 0.950022 1.31159 0.931666C1.64577 0.910598 2.04908 1.17671 2.8557 1.70894L7.7489 4.93762Z" fill="#8391A1"/>
            </svg>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                    <path d="M18.749 9.31C18.749 9.57522 18.8543 9.82957 19.0419 10.0171C19.2294 10.2046 19.4837 10.31 19.749 10.31C20.0142 10.31 20.2685 10.2046 20.4561 10.0171C20.6436 9.82957 20.749 9.57522 20.749 9.31V5C20.749 4.73478 20.6436 4.48043 20.4561 4.29289C20.2685 4.10536 20.0142 4 19.749 4H15.449C15.1837 4 14.9294 4.10536 14.7419 4.29289C14.5543 4.48043 14.449 4.73478 14.449 5C14.449 5.26522 14.5543 5.51957 14.7419 5.70711C14.9294 5.89464 15.1837 6 15.449 6H17.339L12.749 10.59L6.90896 4.76C6.71766 4.59617 6.47159 4.51057 6.21991 4.52029C5.96823 4.53001 5.72949 4.63434 5.5514 4.81244C5.3733 4.99053 5.26897 5.22927 5.25925 5.48095C5.24953 5.73262 5.33514 5.9787 5.49896 6.17L11.329 12L5.03896 18.29C4.94523 18.383 4.87084 18.4936 4.82007 18.6154C4.7693 18.7373 4.74316 18.868 4.74316 19C4.74316 19.132 4.7693 19.2627 4.82007 19.3846C4.87084 19.5064 4.94523 19.617 5.03896 19.71C5.13193 19.8037 5.24253 19.8781 5.36439 19.9289C5.48624 19.9797 5.61695 20.0058 5.74896 20.0058C5.88097 20.0058 6.01168 19.9797 6.13354 19.9289C6.2554 19.8781 6.366 19.8037 6.45896 19.71L18.749 7.42V9.31Z" fill="#8391A1"/>
                    <path d="M19.749 13.68C19.4838 13.68 19.2294 13.7854 19.0419 13.9729C18.8543 14.1604 18.749 14.4148 18.749 14.68V16.59L15.969 13.8C15.7807 13.6117 15.5253 13.5059 15.259 13.5059C14.9927 13.5059 14.7373 13.6117 14.549 13.8C14.3607 13.9883 14.2549 14.2437 14.2549 14.51C14.2549 14.7763 14.3607 15.0317 14.549 15.22L17.319 18H15.439C15.1738 18 14.9194 18.1054 14.7319 18.2929C14.5443 18.4804 14.439 18.7348 14.439 19C14.439 19.2652 14.5443 19.5196 14.7319 19.7071C14.9194 19.8946 15.1738 20 15.439 20H19.749C19.8901 20.0009 20.0298 19.9718 20.1589 19.9149C20.288 19.8579 20.4036 19.7742 20.498 19.6694C20.5925 19.5645 20.6637 19.4409 20.7069 19.3065C20.7502 19.1722 20.7645 19.0303 20.749 18.89V14.68C20.749 14.4148 20.6436 14.1604 20.4561 13.9729C20.2686 13.7854 20.0142 13.68 19.749 13.68Z" fill="#8391A1"/>
                </g>
            </svg>
          </div>
        <HideButton />
      </div>
      {isShownSongs && <div className='musicplaying-songs'>
        <div className='musicplaying-songs-overlap' />
        <div className='musicplaying-songs-panel'>
          <div className='musicplaying-songs-title'>
            <div>Songs</div>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={hideSongs}>
                <path d="M17 1L1 17M17 17L1 1" stroke="#8391A1" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className='musicplaying-songs-container'>
            {songsInPlaylist.map((song, index) => <MusicPlayingSonglist key={song.id} isPlaying={isPlaying} songinfo={song} songNo={songNo} idx={index} />)}
          </div>
        </div>
      </div>}
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={musicSrc}
      />
    </div>
  )
}
