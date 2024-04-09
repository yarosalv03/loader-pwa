import React, { useContext } from 'react'
import { ThemeContext } from '../Theme'
import '../styles/MusicPlaying.css'

export default function HideButton() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className='hide-button'>
            {theme === 'light-theme' ? <svg width="30" height="30" viewBox="16 12 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_43_18471)">
                    <rect x="16" y="12" width="30" height="30" rx="8" fill="white"/>
                    <path d="M28.2021 26L31.2021 29L34.2021 26" stroke="#121316" strokeLinecap="round"/>
                </g>
                <defs>
                    <filter id="filter0_d_43_18471" x="0.6" y="0.6" width="60.8" height="60.8" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="7.7"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.698039 0 0 0 0 0.745098 0 0 0 0 0.764706 0 0 0 0.37 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_43_18471"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_43_18471" result="shape"/>
                    </filter>
                </defs>
            </svg> : <svg width="30" height="30" viewBox="16 12 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_171_35411)">
                    <rect x="16" y="12" width="30" height="30" rx="8" fill="#191A1D"/>
                    <path d="M28 25.5L31 28.5L34 25.5" stroke="#8391A1" strokeLinecap="round"/>
                </g>
                <defs>
                    <filter id="filter0_d_171_35411" x="0.6" y="0.6" width="60.8" height="60.8" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="7.7"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.0431373 0 0 0 0 0.0470588 0 0 0 0 0.0509804 0 0 0 0.37 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_171_35411"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_171_35411" result="shape"/>
                    </filter>
                </defs>
            </svg>}
        </div>
    )
}
