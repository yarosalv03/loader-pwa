import React from 'react'
import '../styles/Splash.css'
import { useNavigate } from 'react-router-dom'

export default function Splash() {
    const navigate = useNavigate();
    const go2Next = () => {
        navigate('/next');
    }
    return (
        <div className='splash-screen' onClick={go2Next}>
            <svg className='rect1' width="4" height="15" viewBox="0 0 4 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="4" height="15" rx="2" fill="#6C5CE7"/>
            </svg>
            <svg className='rect2' width="4" height="37" viewBox="0 0 4 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="4" height="37" rx="2" fill="#6C5CE7"/>
            </svg>
            <svg className='rect3' width="4" height="25" viewBox="0 0 4 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="4" height="25" rx="2" fill="#6C5CE7"/>
            </svg>
            <svg className='rect4' width="4" height="37" viewBox="0 0 4 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="4" height="37" rx="2" fill="#6C5CE7"/>
            </svg>
            <svg className='rect5' width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="4" height="11" rx="2" fill="#6C5CE7"/>
            </svg>
            <svg width="375" height="395" viewBox="0 0 375 395" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 'calc(50vh - 197px)', left: 'calc(50vw - 187px)' }}>
                <g opacity="0.4" filter="url(#filter0_f_171_36110)">
                    <circle cx="187.5" cy="197.5" r="57.5" fill="#6C5CE7"/>
                </g>
                <defs>
                    <filter id="filter0_f_171_36110" x="-9.2" y="0.800003" width="393.4" height="393.4" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="69.6" result="effect1_foregroundBlur_171_36110"/>
                    </filter>
                </defs>
            </svg>
        </div>
    )
}
