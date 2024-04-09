import React, { useContext } from 'react'
import { ThemeContext } from '../Theme'

export default function ToggleButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className='ToggleButton'>
            {theme === 'light-theme' ?
                <svg width="86" height="87" viewBox="0 0 86 87" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleTheme} style={{ cursor: 'pointer' }}>
                    <g filter="url(#filter0_i_171_33293)">
                        <rect x="31.9322" y="21.5255" width="44.7458" height="16.9492" rx="8.47458" fill="white"/>
                    </g>
                    <g filter="url(#filter1_dd_171_33293)">
                        <rect x="25.8305" y="12.7119" width="34.5763" height="34.5763" rx="17.2881" fill="white"/>
                        <rect x="26.1695" y="13.0508" width="33.8983" height="33.8983" rx="16.9492" stroke="#F5F6FA" strokeWidth="0.677966"/>
                        <path d="M40.3753 34.7534C40.1626 34.6304 39.8904 34.703 39.7674 34.9157C39.6444 35.1284 39.7171 35.4006 39.9298 35.5236L40.3753 34.7534ZM37.5949 33.1888C37.718 33.4015 37.9901 33.4742 38.2028 33.3511C38.4155 33.2281 38.4882 32.9559 38.3652 32.7433L37.5949 33.1888ZM48.6059 29.9999C48.6059 33.0304 46.1492 35.4872 43.1186 35.4872V36.377C46.6406 36.377 49.4958 33.5219 49.4958 29.9999H48.6059ZM37.6313 29.9999C37.6313 26.9694 40.0881 24.5126 43.1186 24.5126V23.6228C39.5967 23.6228 36.7415 26.4779 36.7415 29.9999H37.6313ZM45.1949 31.3347C43.3111 31.3347 41.7839 29.8075 41.7839 27.9237H40.8941C40.8941 30.299 42.8196 32.2245 45.1949 32.2245V31.3347ZM48.1167 29.6849C47.5187 30.6746 46.4337 31.3347 45.1949 31.3347V32.2245C46.758 32.2245 48.1258 31.3904 48.8783 30.1451L48.1167 29.6849ZM41.7839 27.9237C41.7839 26.6849 42.444 25.5999 43.4336 25.0018L42.9735 24.2403C41.7282 24.9927 40.8941 26.3606 40.8941 27.9237H41.7839ZM43.1186 24.5126C43.0661 24.5126 43.0046 24.489 42.9599 24.4424C42.922 24.403 42.9133 24.3658 42.9112 24.3507C42.9087 24.3322 42.9099 24.2786 42.9735 24.2403L43.4336 25.0018C43.7321 24.8215 43.8281 24.4913 43.793 24.2316C43.7566 23.9617 43.5437 23.6228 43.1186 23.6228V24.5126ZM48.8783 30.1451C48.8399 30.2086 48.7863 30.2099 48.7679 30.2074C48.7528 30.2053 48.7155 30.1965 48.6761 30.1587C48.6296 30.114 48.6059 30.0524 48.6059 29.9999H49.4958C49.4958 29.5748 49.1568 29.362 48.8869 29.3255C48.6273 29.2904 48.297 29.3864 48.1167 29.6849L48.8783 30.1451ZM43.1186 35.4872C42.1184 35.4872 41.182 35.22 40.3753 34.7534L39.9298 35.5236C40.8682 36.0665 41.9578 36.377 43.1186 36.377V35.4872ZM38.3652 32.7433C37.8986 31.9366 37.6313 31.0002 37.6313 29.9999H36.7415C36.7415 31.1607 37.0521 32.2504 37.5949 33.1888L38.3652 32.7433Z" fill="#2D3436"/>
                    </g>
                    <defs>
                        <filter id="filter0_i_171_33293" x="31.9322" y="21.5255" width="44.7458" height="18.9831" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="2.0339"/>
                            <feGaussianBlur stdDeviation="3.08475"/>
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.698039 0 0 0 0 0.745098 0 0 0 0 0.764706 0 0 0 0.76 0"/>
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_171_33293"/>
                        </filter>
                        <filter id="filter1_dd_171_33293" x="0.33898" y="0.77965" width="85.5593" height="85.5593" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="13.5593"/>
                            <feGaussianBlur stdDeviation="12.7458"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.698039 0 0 0 0 0.745098 0 0 0 0 0.764706 0 0 0 0.1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_171_33293"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="2.71186"/>
                            <feGaussianBlur stdDeviation="2.67797"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.698039 0 0 0 0 0.745098 0 0 0 0 0.764706 0 0 0 0.2 0"/>
                            <feBlend mode="normal" in2="effect1_dropShadow_171_33293" result="effect2_dropShadow_171_33293"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_171_33293" result="shape"/>
                        </filter>
                    </defs>
                </svg> :
                <svg width="68" height="87" viewBox="0 0 68 87" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleTheme} style={{ cursor: 'pointer' }}>
                    <g filter="url(#filter0_i_171_36108)">
                        <rect x="9.25421" y="21.5254" width="44.7458" height="16.9492" rx="8.47458" fill="#6C5CE7"/>
                    </g>
                    <g filter="url(#filter1_dd_171_36108)">
                        <rect x="25.5255" y="12.7119" width="34.5763" height="34.5763" rx="17.2881" fill="#1E1F22"/>
                        <rect x="25.8644" y="13.0509" width="33.8983" height="33.8983" rx="16.9492" stroke="#28292C" strokeWidth="0.677966"/>
                        <g clipPath="url(#clip0_171_36108)">
                            <path d="M42.8136 24.0679V24.6611" stroke="#B2BEC3" strokeWidth="1.01695" strokeLinecap="round"/>
                            <path d="M42.8136 35.3389V35.9321" stroke="#B2BEC3" strokeWidth="1.01695" strokeLinecap="round"/>
                            <path d="M48.7458 30H48.1526" stroke="#B2BEC3" strokeWidth="1.01695" strokeLinecap="round"/>
                            <path d="M37.4746 30H36.8814" stroke="#B2BEC3" strokeWidth="1.01695" strokeLinecap="round"/>
                            <path d="M47.0081 25.8057L46.7751 26.0387" stroke="#B2BEC3" strokeWidth="1.01695" strokeLinecap="round"/>
                            <path d="M38.8519 33.9614L38.6189 34.1945" stroke="#B2BEC3" strokeWidth="1.01695" strokeLinecap="round"/>
                            <path d="M47.0081 34.1942L46.7751 33.9612" stroke="#B2BEC3" strokeWidth="1.01695" strokeLinecap="round"/>
                            <path d="M38.8519 26.0387L38.6189 25.8057" stroke="#B2BEC3" strokeWidth="1.01695" strokeLinecap="round"/>
                            <path d="M39.4568 28.8136C39.3256 29.1847 39.2543 29.584 39.2543 30C39.2543 31.9658 40.8478 33.5593 42.8136 33.5593C44.7793 33.5593 46.3729 31.9658 46.3729 30C46.3729 28.0342 44.7793 26.4407 42.8136 26.4407C42.3976 26.4407 41.9983 26.512 41.6272 26.6432" stroke="#B2BEC3" strokeWidth="1.01695" strokeLinecap="round"/>
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_i_171_36108" x="9.25421" y="21.5254" width="44.7458" height="18.9831" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="2.0339"/>
                            <feGaussianBlur stdDeviation="3.05085"/>
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.0420527 0 0 0 0 0.0472422 0 0 0 0 0.0494046 0 0 0 0.88 0"/>
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_171_36108"/>
                        </filter>
                        <filter id="filter1_dd_171_36108" x="0.033926" y="0.779711" width="85.5593" height="85.5592" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="13.5593"/>
                            <feGaussianBlur stdDeviation="12.7458"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.0627451 0 0 0 0 0.0705882 0 0 0 0.1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_171_36108"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="2.71186"/>
                            <feGaussianBlur stdDeviation="2.67797"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.0474702 0 0 0 0 0.0627013 0 0 0 0 0.0690476 0 0 0 0.2 0"/>
                            <feBlend mode="normal" in2="effect1_dropShadow_171_36108" result="effect2_dropShadow_171_36108"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_171_36108" result="shape"/>
                        </filter>
                        <clipPath id="clip0_171_36108">
                            <rect width="14.2373" height="14.2373" fill="white" transform="translate(35.6949 22.8813)"/>
                        </clipPath>
                    </defs>
                </svg>
            }
        </div>
    )
}
