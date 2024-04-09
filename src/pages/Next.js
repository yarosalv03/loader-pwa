import React, { useEffect } from 'react'
import '../styles/Next.css'
import { useNavigate } from 'react-router-dom';

export default function Next() {
    const navigate = useNavigate();
    useEffect(() => {
        const redirectTimer = setTimeout(() => {
            navigate('/start');
        }, 1400);
        return () => clearTimeout(redirectTimer);
    }, [navigate]);
    return (
        <div className='next-screen'>
            <svg className='loading' width="44" height="37" viewBox="0 0 44 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="11" width="4" height="15" rx="2" fill="#6C5CE7"/>
                <rect x="40" y="13" width="4" height="11" rx="2" fill="#6C5CE7"/>
                <rect x="10" width="4" height="37" rx="2" fill="#6C5CE7"/>
                <rect x="30" width="4" height="37" rx="2" fill="#6C5CE7"/>
                <rect x="20" y="6" width="4" height="25" rx="2" fill="#6C5CE7"/>
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
