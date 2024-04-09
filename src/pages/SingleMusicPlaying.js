import React, { useContext, useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ThemeContext } from '../Theme'
import BackButton from '../components/BackButton'
import HideButton from '../components/HideButton'
import playingImage from '../assets/images/playing.png'
import '../styles/SingleMusicPlaying.css'

export default function SingleMusicPlaying() {
  const { id } = useParams();
  const songs = useSelector(state => state.songs.songs);
  const audioRef = useRef(null);
  const [currSong, setCurrSong] = useState('');
  const [songName, setSongName] = useState('');
  const [songTitle, setSongTitle] = useState('');
  const { theme } = useContext(ThemeContext);
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
  useEffect(() => {
    const selectedSong = songs.find(song => song.id === id);
    setCurrSong(selectedSong.audioUrl);
    setSongName(selectedSong.name);
    setSongTitle(selectedSong.title);
  }, [songs, id]);
  return (
    <div className='SingleMusicPlaying'>
      <div className='single-musicplaying-header'>
        <div className='single-musicplaying-title-container'>
          <BackButton />
          <div className='single-musicplaying-title'>Playing Now</div>
        </div>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="#6C5CE7"/>
          <path d="M15 11L15 19" stroke="#6C5CE7" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M19 15H11" stroke="#6C5CE7" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
      <div className='single-musicplaying-container'>
        <div className='single-musicplaying-playing'>
          {theme === 'light-theme' ? <svg className='single-music-playing-bottom-shadow1' width="375" height="92" viewBox="0 0 375 92" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          </svg> : <svg className='single-music-playing-bottom-shadow1' width="375" height="92" viewBox="0 0 375 92" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          {theme === 'light-theme' ? <svg className='single-music-playing-bottom-shadow2' width="350" height="32" viewBox="0 0 350 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          </svg> : <svg className='single-music-playing-bottom-shadow2' width="375" height="64" viewBox="0 0 375 64" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <img className='single-musicplaying-image' src={playingImage} alt="playingImage" />
        </div>
        <div className='single-musicplaying-songinfo'>
          <div className='single-musicplaying-title'>{songName}</div>
          <div className='single-musicplaying-name'>{songTitle}</div>
          <div className='single-musicplaying-amount'>01 / 01</div>
        </div>
      </div>
      <div className='single-musicplaying-actions'>
        <div className='single-musicplaying-progressbar'>
          <input
            className="single-musicplaying-timeline"
            type="range"
            min="0"
            max={duration}
            default="0"
            value={seconds}
            onChange={dragHandler}
          />
        </div>
        <div className='single-musicplaying-time'>
          <div className='single-musicplaying-starttime'>{formatNum(currTime.min)} : {formatNum(currTime.sec)}</div>
          <div className='single-musicplaying-endtime'>{formatNum(allTime.min)} : {formatNum(allTime.sec)}</div>
        </div>
        <div className='single-musicplaying-controls' onClick={playingButton}>
        {isPlaying ? <svg width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <svg width="71" height="70" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </div>
        <HideButton />
      </div>
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currSong}
      />
    </div>
  )
}
