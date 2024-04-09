import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../Theme'
import '../styles/PlaylistView.css'

export default function BackButton() {
    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate();
    const go2Library = () => {
        navigate('/library');
    }
    return (
        <div className='back-button' onClick={go2Library}>
            {theme === 'light-theme' ? <svg width="40" height="40" viewBox="14 12 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_25_15940)">
                    <rect x="14" y="12" width="40" height="40" rx="12" fill="white"/>
                    <path d="M26.9697 31.4697C26.6768 31.7626 26.6768 32.2374 26.9697 32.5303L31.7426 37.3033C32.0355 37.5962 32.5104 37.5962 32.8033 37.3033C33.0962 37.0104 33.0962 36.5355 32.8033 36.2426L28.5607 32L32.8033 27.7574C33.0962 27.4645 33.0962 26.9896 32.8033 26.6967C32.5104 26.4038 32.0355 26.4038 31.7426 26.6967L26.9697 31.4697ZM40.5 32.75C40.9142 32.75 41.25 32.4142 41.25 32C41.25 31.5858 40.9142 31.25 40.5 31.25L40.5 32.75ZM27.5 32.75L40.5 32.75L40.5 31.25L27.5 31.25L27.5 32.75Z" fill="#8391A1"/>
                </g>
                <defs>
                    <filter id="filter0_d_25_15940" x="-1.4" y="0.6" width="70.8" height="70.8" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="7.7"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.698039 0 0 0 0 0.745098 0 0 0 0 0.764706 0 0 0 0.37 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_25_15940"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_25_15940" result="shape"/>
                    </filter>
                </defs>
            </svg> : <svg width="40" height="40" viewBox="14 12 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_171_35064)">
                    <rect x="14" y="12" width="40" height="40" rx="12" fill="#191A1D"/>
                    <path d="M26.9697 31.4697C26.6768 31.7626 26.6768 32.2374 26.9697 32.5303L31.7426 37.3033C32.0355 37.5962 32.5104 37.5962 32.8033 37.3033C33.0962 37.0104 33.0962 36.5355 32.8033 36.2426L28.5607 32L32.8033 27.7574C33.0962 27.4645 33.0962 26.9896 32.8033 26.6967C32.5104 26.4038 32.0355 26.4038 31.7426 26.6967L26.9697 31.4697ZM40.5 32.75C40.9142 32.75 41.25 32.4142 41.25 32C41.25 31.5858 40.9142 31.25 40.5 31.25L40.5 32.75ZM27.5 32.75L40.5 32.75L40.5 31.25L27.5 31.25L27.5 32.75Z" fill="#8391A1"/>
                </g>
                <defs>
                    <filter id="filter0_d_171_35064" x="-1.4" y="0.6" width="70.8" height="70.8" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <eGaussianBlur stdDeviation="7.7"/>
                        <ffeOffset dy="4"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0431373 0 0 0 0 0.0470588 0 0 0 0 0.0509804 0 0 0 0.37 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_171_35064"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_171_35064" result="shape"/>
                    </filter>
                </defs>
            </svg>}
        </div>
    )
}
