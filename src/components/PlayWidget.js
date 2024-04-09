import React, { useContext, useState } from 'react'
import { ThemeContext } from '../Theme'
import playWidget from '../assets/images/play-widget.png'
import '../styles/Library.css'

export default function PlayWidget() {
    const { theme } = useContext(ThemeContext);
    const [isHidden, setIsHidden] = useState(false);
    const toggleHiddenStatus = () => {
        setIsHidden(!isHidden);
    }
    return (
        <div className='play-widget'>
            {!isHidden && <div className='play-widget-main' onClick={toggleHiddenStatus}>
                <div className='play-widget-content'>
                    <img src={playWidget} alt="playWidget" />
                    <div className='play-widget-info'>
                        <div className='play-widget-time'>00:25 / 04:00</div>
                        <div className='play-widget-title'>Imagine Dragons</div>
                        <div className='play-widget-name'>Believer</div>
                    </div>
                </div>
                <div className='play-widget-action'>
                    <div className='previous-button'>
                        {theme === 'light-theme' ? <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M8.05778 3.33801V2.38979C8.05778 1.42341 8.05778 0.940216 7.85615 0.672889C7.68048 0.439978 7.41186 0.295395 7.1207 0.277039C6.78652 0.255971 6.38321 0.522087 5.57659 1.05432L1.62107 3.66428L1.61164 3.67051V1.37384C1.61164 0.928824 1.25088 0.568065 0.805856 0.568065C0.360835 0.568065 7.53403e-05 0.928825 7.53403e-05 1.37385V8.62586C7.53403e-05 9.07088 0.360835 9.43164 0.805856 9.43164C1.25088 9.43164 1.61164 9.07088 1.61164 8.62586V6.32902L1.62107 6.33524L5.57659 8.94521C6.38321 9.47744 6.78652 9.74356 7.1207 9.72249C7.41186 9.70413 7.68048 9.55955 7.85615 9.32664C8.05778 9.05931 8.05778 8.57612 8.05778 7.60973V6.66152L11.5188 8.94521C12.3254 9.47744 12.7287 9.74356 13.0629 9.72249C13.3541 9.70413 13.6227 9.55955 13.7984 9.32664C14 9.05931 14 8.57612 14 7.60973L14 2.38979C14 1.42341 14 0.940216 13.7984 0.672889C13.6227 0.439978 13.3541 0.295395 13.0629 0.277039C12.7287 0.255971 12.3254 0.522087 11.5188 1.05432L8.05778 3.33801Z" fill="#6C5CE7"/>
                        </svg> :
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M8.05803 3.33825V2.39004C8.05803 1.42365 8.05803 0.94046 7.8564 0.673133C7.68072 0.440223 7.4121 0.295639 7.12095 0.277283C6.78677 0.256215 6.38346 0.522331 5.57684 1.05456L1.62132 3.66453L1.61188 3.67076V1.37409C1.61188 0.929068 1.25112 0.568309 0.8061 0.568309C0.361079 0.568309 0.000319481 0.929069 0.000319481 1.37409V8.62611C0.000319481 9.07113 0.361079 9.43189 0.8061 9.43189C1.25112 9.43189 1.61188 9.07113 1.61188 8.62611V6.32926L1.62132 6.33549L5.57684 8.94545C6.38346 9.47768 6.78677 9.7438 7.12095 9.72273C7.4121 9.70438 7.68072 9.55979 7.8564 9.32688C8.05803 9.05956 8.05803 8.57636 8.05803 7.60997V6.66177L11.5191 8.94545C12.3257 9.47768 12.729 9.7438 13.0632 9.72273C13.3543 9.70438 13.6229 9.55979 13.7986 9.32688C14.0002 9.05956 14.0002 8.57636 14.0002 7.60997V2.39004C14.0002 1.42365 14.0002 0.94046 13.7986 0.673133C13.6229 0.440223 13.3543 0.295639 13.0632 0.277283C12.729 0.256215 12.3257 0.522331 11.5191 1.05456L8.05803 3.33825Z" fill="#B2A8FF"/>
                        </svg>}
                    </div>
                    <div className='start-stop-button'>
                        {theme === 'light-theme' ? <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.11084" width="5.00004" height="17.7779" rx="2.50002" fill="#6C5CE7"/>
                            <rect x="10" y="0.11084" width="5.00004" height="17.7779" rx="2.50002" fill="#6C5CE7"/>
                        </svg> :
                        <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.000244141" y="0.111084" width="5.00004" height="17.7779" rx="2.50002" fill="#B2A8FF"/>
                            <rect x="10.0002" y="0.111084" width="5.00004" height="17.7779" rx="2.50002" fill="#B2A8FF"/>
                        </svg>}
                    </div>
                    <div className='next-button'>
                        {theme === 'light-theme' ? <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M5.94226 3.33795V2.38979C5.94226 1.42341 5.94226 0.940216 6.14389 0.672889C6.31956 0.439978 6.58818 0.295395 6.87934 0.277039C7.21351 0.255971 7.61682 0.522087 8.42344 1.05432L12.379 3.6643L12.3885 3.67055V1.37387C12.3885 0.928844 12.7492 0.568082 13.1942 0.568082C13.6393 0.568082 14 0.928843 14 1.37386V8.6259C14 9.07092 13.6393 9.43168 13.1942 9.43168C12.7492 9.43168 12.3885 9.07092 12.3885 8.6259V6.32901L12.379 6.33526L8.42344 8.94524C7.61682 9.47747 7.21351 9.74359 6.87934 9.72252C6.58818 9.70416 6.31956 9.55958 6.14389 9.32667C5.94226 9.05934 5.94226 8.57615 5.94226 7.60976V6.66161L2.48131 8.94524C1.67469 9.47747 1.27138 9.74359 0.937202 9.72252C0.646048 9.70416 0.377426 9.55958 0.201753 9.32667C0.000122007 9.05934 0.000122028 8.57615 0.00012207 7.60976L0.000122299 2.38979C0.000122341 1.42341 0.000122362 0.940216 0.201754 0.672889C0.377426 0.439978 0.646048 0.295395 0.937203 0.277039C1.27138 0.255971 1.67469 0.522087 2.48131 1.05432L5.94226 3.33795Z" fill="#6C5CE7"/>
                        </svg> :
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M5.94238 3.33819V2.39004C5.94238 1.42365 5.94238 0.94046 6.14401 0.673133C6.31968 0.440223 6.5883 0.295639 6.87946 0.277283C7.21364 0.256215 7.61695 0.522331 8.42357 1.05456L12.3791 3.66454L12.3886 3.67079V1.37411C12.3886 0.929089 12.7493 0.568326 13.1944 0.568326C13.6394 0.568326 14.0001 0.929087 14.0001 1.37411V8.62614C14.0001 9.07116 13.6394 9.43193 13.1944 9.43193C12.7493 9.43193 12.3886 9.07117 12.3886 8.62614V6.32925L12.3791 6.3355L8.42356 8.94548C7.61694 9.47771 7.21364 9.74383 6.87946 9.72276C6.5883 9.70441 6.31968 9.55982 6.14401 9.32691C5.94238 9.05958 5.94238 8.57639 5.94238 7.61V6.66185L2.48143 8.94548C1.67481 9.47771 1.2715 9.74383 0.937324 9.72276C0.646169 9.70441 0.377547 9.55982 0.201875 9.32691C0.000244141 9.05958 0.000244141 8.57639 0.000244141 7.61V2.39004C0.000244141 1.42365 0.000244141 0.94046 0.201875 0.673133C0.377548 0.440223 0.64617 0.295639 0.937324 0.277283C1.2715 0.256215 1.67481 0.522331 2.48143 1.05456L5.94238 3.33819Z" fill="#B2A8FF"/>
                        </svg>}
                    </div>
                </div>
            </div>}
            {!isHidden && <div className='play-widget-shadow'>
                {theme === 'light-theme' ? <svg width="392" height="92" viewBox="0 0 392 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.49">
                        <g filter="url(#filter0_f_56_4648)">
                            <path d="M196 29L363 63L196 55.6486L29 63L196 29Z" fill="#141819"/>
                        </g>
                        <g filter="url(#filter1_f_56_4648)">
                            <path d="M196 42L363 58L196 54.5405L29 58L196 42Z" fill="#141819" fillOpacity="0.17"/>
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_f_56_4648" x="0" y="0" width="392" height="92" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="14.5" result="effect1_foregroundBlur_56_4648"/>
                        </filter>
                        <filter id="filter1_f_56_4648" x="21" y="34" width="350" height="32" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_56_4648"/>
                        </filter>
                    </defs>
                </svg> : <svg width="392" height="84" viewBox="0 0 392 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.49">
                        <g filter="url(#filter0_f_166_27284)">
                            <path d="M196 29L363 63L196 55.6486L29 63L196 29Z" fill="#0B0C0D"/>
                        </g>
                        <g filter="url(#filter1_f_166_27284)">
                            <path d="M196 42L363 58L196 54.5405L29 58L196 42Z" fill="#0B0C0D" fillOpacity="0.17"/>
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_f_166_27284" x="0" y="0" width="392" height="92" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="14.5" result="effect1_foregroundBlur_166_27284"/>
                        </filter>
                        <filter id="filter1_f_166_27284" x="21" y="34" width="350" height="32" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_166_27284"/>
                        </filter>
                    </defs>
                </svg>}
            </div>}
            {isHidden && <div className='play-widget-hidden' onClick={toggleHiddenStatus}>
                <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="0.2" cx="34" cy="34" r="34" fill="#6C5CE7"/>
                    <rect x="6.47626" y="6.47607" width="55.0476" height="55.0476" rx="27.5238" fill="url(#paint0_radial_56_4857)"/>
                    {/* <rect x="22" y="30.2021" width="2.25532" height="8.45745" rx="1.12766" fill="#F5F6FA"/>
                    <rect x="44.5532" y="31.3296" width="2.25532" height="6.20213" rx="1.12766" fill="#F5F6FA"/>
                    <rect x="27.6383" y="24" width="2.25532" height="20.8617" rx="1.12766" fill="#F5F6FA"/>
                    <rect x="38.9149" y="24" width="2.25532" height="20.8617" rx="1.12766" fill="#F5F6FA"/>
                    <rect x="33.2766" y="27.3828" width="2.25532" height="14.0957" rx="1.12766" fill="#F5F6FA"/> */}
                    <defs>
                        <radialGradient id="paint0_radial_56_4857" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(34.0001 33.9999) rotate(90) scale(86.6191)">
                            <stop offset="0.109966" stopColor="#6C5CE7"/>
                            <stop offset="0.958736" stopColor="#3C3381"/>
                        </radialGradient>
                    </defs>
                </svg>
                <div className='play-widget-hidden-animation'>
                    <svg className='play-widget-hidden-animation-1' width="3" height="9" viewBox="0 0 3 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.202148" width="2.25532" height="8.45745" rx="1.12766" fill="#F5F6FA"/>
                    </svg>
                    <svg className='play-widget-hidden-animation-2' width="3" height="21" viewBox="0 0 3 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.638306" width="2.25532" height="20.8617" rx="1.12766" fill="#F5F6FA"/>
                    </svg>
                    <svg className='play-widget-hidden-animation-3' width="3" height="15" viewBox="0 0 3 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.276611" y="0.382812" width="2.25532" height="14.0957" rx="1.12766" fill="#F5F6FA"/>
                    </svg>
                    <svg className='play-widget-hidden-animation-4' width="4" height="21" viewBox="0 0 4 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.914917" width="2.25532" height="20.8617" rx="1.12766" fill="#F5F6FA"/>
                    </svg>
                    <svg className='play-widget-hidden-animation-5' width="3" height="7" viewBox="0 0 3 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.553223" y="0.32959" width="2.25532" height="6.20213" rx="1.12766" fill="#F5F6FA"/>
                    </svg>
                </div>
            </div>}
        </div>
    )
}
