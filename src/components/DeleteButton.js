import React,{ useContext } from 'react'
import { ThemeContext } from '../Theme'

export default function DeleteButton({deleteHistory, history}) {
    const { theme } = useContext(ThemeContext);
    return (
        <div className='delete-button' onClick={() => deleteHistory(history)}>
            {theme === 'light-theme' ? <svg width="30" height="30" viewBox="16 12 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_33_17363)">
                    <rect x="16" y="42" width="30" height="30" rx="8" transform="rotate(-90 16 42)" fill="white"/>
                    <path d="M28 29.7979L31 26.7979L28 23.7979" stroke="#121316" strokeLinecap="round"/>
                    <path d="M34 29.7979L31 26.7979L34 23.7979" stroke="#121316" strokeLinecap="round"/>
                </g>
                <defs>
                    <filter id="filter0_d_33_17363" x="0.6" y="0.6" width="60.8" height="60.8" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="7.7"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.698039 0 0 0 0 0.745098 0 0 0 0 0.764706 0 0 0 0.37 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_33_17363"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_33_17363" result="shape"/>
                    </filter>
                </defs>
            </svg> : <svg width="30" height="30" viewBox="16 12 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_171_35245)">
                    <rect x="16" y="12" width="30" height="30" rx="8" fill="#191A1D"/>
                    <path d="M28 30L31 27L28 24" stroke="#8391A1" strokeLinecap="round"/>
                    <path d="M34 30L31 27L34 24" stroke="#8391A1" strokeLinecap="round"/>
                </g>
                <defs>
                    <filter id="filter0_d_171_35245" x="0.6" y="0.6" width="60.8" height="60.8" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="7.7"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.0431373 0 0 0 0 0.0470588 0 0 0 0 0.0509804 0 0 0 0.37 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_171_35245"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_171_35245" result="shape"/>
                    </filter>
                </defs>
            </svg>}
        </div>
    )
}
