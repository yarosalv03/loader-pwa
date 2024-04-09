import React, { useContext, useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ThemeContext } from '../Theme';

export default function DownloadButton() {
    const { theme } = useContext(ThemeContext);
    const [progress, setProgress] = useState(0);
    const [downloadState, setDownloadState] = useState('notyet');
    const startDownload = () => {
        if (downloadState === 'notyet') {
            setDownloadState('downloading');
        } else if (downloadState === 'done') {
            setDownloadState('notyet');
        }
    }
    useEffect(() => {
        let interval;
        if (downloadState === 'downloading') {
            interval = setInterval(() => {
                setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 1 : 100));
                if (progress === 100) {
                    clearInterval(interval);
                    setDownloadState('done');
                }
            }, 50);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [downloadState, progress])
    return (
        <button className='downloadbtn'>
            {theme === 'light-theme' && downloadState !== 'done' && <svg width="42" height="42" viewBox="16 12 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={startDownload}>
                <g filter="url(#filter0_d_18_151)">
                    <rect x="16" y="12" width="42" height="42" rx="21" fill="#EAECF2"/>
                    <rect x="21.5" y="17.5" width="31" height="31" rx="15.5" fill="#F5F6FA"/>
                    {downloadState === 'notyet' && <path opacity="0.5" d="M40.125 30.626C41.4844 30.6335 42.2206 30.6938 42.7008 31.1741C43.25 31.7233 43.25 32.6071 43.25 34.3749V34.9999C43.25 36.7676 43.25 37.6516 42.7008 38.2007C42.1516 38.7499 41.2677 38.7499 39.5 38.7499H34.5C32.7322 38.7499 31.8483 38.7499 31.2992 38.2007C30.75 37.6516 30.75 36.7676 30.75 34.9999V34.3749C30.75 32.6071 30.75 31.7233 31.2992 31.1741C31.7794 30.6938 32.5156 30.6335 33.875 30.626" stroke="#121316" strokeWidth="1.5" strokeLinecap="round"/>}
                    {downloadState === 'notyet' && <path d="M37 26.25V34.375M37 34.375L35.125 32.1875M37 34.375L38.875 32.1875" stroke="#121316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>}
                    {<path d="M37 13.5C47.7696 13.5 56.5 22.2304 56.5 33C56.5 43.7696 47.7696 52.5 37 52.5C26.2304 52.5 17.5 43.7696 17.5 33C17.5 22.2304 26.2304 13.5 37 13.5ZM37 50.1342C46.463 50.1342 54.1342 42.463 54.1342 33C54.1342 23.537 46.463 15.8658 37 15.8658C27.537 15.8658 19.8658 23.537 19.8658 33C19.8658 42.463 27.537 50.1342 37 50.1342Z" fill="white"/>}
                </g>
                <defs>
                    <filter id="filter0_d_18_151" x="0.6" y="0.6" width="72.8" height="72.8" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="7.7"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.698039 0 0 0 0 0.745098 0 0 0 0 0.764706 0 0 0 0.37 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18_151"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18_151" result="shape"/>
                    </filter>
                </defs>
            </svg>}
            {theme === 'light-theme' && downloadState === 'done' && <svg width="42" height="42" viewBox="16 12 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_18_147)">
                    <rect x="16" y="12" width="42" height="42" rx="21" fill="#EAECF2"/>
                    <rect x="21.5" y="17.5" width="31" height="31" rx="15.5" fill="#F5F6FA"/>
                    <path d="M37 25C39.1217 25 41.1566 25.8429 42.6569 27.3431C44.1571 28.8434 45 30.8783 45 33C45 35.1217 44.1571 37.1566 42.6569 38.6569C41.1566 40.1571 39.1217 41 37 41C34.8783 41 32.8434 40.1571 31.3431 38.6569C29.8429 37.1566 29 35.1217 29 33C29 30.8783 29.8429 28.8434 31.3431 27.3431C32.8434 25.8429 34.8783 25 37 25ZM36.0034 34.5783L34.2263 32.8C34.1626 32.7363 34.0869 32.6858 34.0037 32.6513C33.9205 32.6168 33.8312 32.599 33.7411 32.599C33.651 32.599 33.5618 32.6168 33.4786 32.6513C33.3953 32.6858 33.3197 32.7363 33.256 32.8C33.1273 32.9287 33.055 33.1032 33.055 33.2851C33.055 33.4671 33.1273 33.6416 33.256 33.7703L35.5189 36.0331C35.5824 36.0972 35.658 36.148 35.7412 36.1827C35.8245 36.2174 35.9138 36.2352 36.004 36.2352C36.0942 36.2352 36.1835 36.2174 36.2668 36.1827C36.35 36.148 36.4256 36.0972 36.4891 36.0331L41.1749 31.3463C41.2394 31.2828 41.2908 31.2072 41.326 31.1238C41.3612 31.0405 41.3795 30.9509 41.3799 30.8604C41.3804 30.7699 41.3629 30.6802 41.3284 30.5965C41.294 30.5127 41.2434 30.4367 41.1794 30.3726C41.1154 30.3086 41.0394 30.2578 40.9557 30.2233C40.872 30.1888 40.7824 30.1712 40.6918 30.1715C40.6013 30.1718 40.5118 30.19 40.4283 30.2251C40.3449 30.2602 40.2692 30.3115 40.2057 30.376L36.0034 34.5783Z" fill="#0AC956"/>
                    <path d="M37 13.5C47.7696 13.5 56.5 22.2304 56.5 33C56.5 43.7696 47.7696 52.5 37 52.5C26.2304 52.5 17.5 43.7696 17.5 33C17.5 22.2304 26.2304 13.5 37 13.5ZM37 50.1342C46.463 50.1342 54.1342 42.463 54.1342 33C54.1342 23.537 46.463 15.8658 37 15.8658C27.537 15.8658 19.8658 23.537 19.8658 33C19.8658 42.463 27.537 50.1342 37 50.1342Z" fill="white"/>
                    <path d="M37 13.5C47.7696 13.5 56.5 22.2304 56.5 33C56.5 43.7696 47.7696 52.5 37 52.5C26.2304 52.5 17.5 43.7696 17.5 33C17.5 22.2304 26.2304 13.5 37 13.5ZM37 50.1342C46.463 50.1342 54.1342 42.463 54.1342 33C54.1342 23.537 46.463 15.8658 37 15.8658C27.537 15.8658 19.8658 23.537 19.8658 33C19.8658 42.463 27.537 50.1342 37 50.1342Z" fill="#0AC956"/>
                </g>
                <defs>
                    <filter id="filter0_d_18_147" x="0.6" y="0.6" width="72.8" height="72.8" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="7.7"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.698039 0 0 0 0 0.745098 0 0 0 0 0.764706 0 0 0 0.37 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18_147"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18_147" result="shape"/>
                    </filter>
                </defs>
            </svg>}
            {theme === 'dark-theme' && downloadState !== 'done' && <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={startDownload}>
                <rect width="42" height="42" rx="21" fill="#121316"/>
                <rect x="5.5" y="5.5" width="31" height="31" rx="15.5" fill="white" fillOpacity="0.14"/>
                {downloadState === 'notyet' && <path opacity="0.5" d="M24.125 18.626C25.4844 18.6335 26.2206 18.6938 26.7008 19.1741C27.25 19.7233 27.25 20.6071 27.25 22.3749V22.9999C27.25 24.7676 27.25 25.6516 26.7008 26.2007C26.1516 26.7499 25.2677 26.7499 23.5 26.7499H18.5C16.7322 26.7499 15.8483 26.7499 15.2992 26.2007C14.75 25.6516 14.75 24.7676 14.75 22.9999V22.3749C14.75 20.6071 14.75 19.7233 15.2992 19.1741C15.7794 18.6938 16.5156 18.6335 17.875 18.626" stroke="#F5F6FA" strokeWidth="1.5" strokeLinecap="round"/>}
                {downloadState === 'notyet' && <path d="M21 14.25V22.375M21 22.375L19.125 20.1875M21 22.375L22.875 20.1875" stroke="#F5F6FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>}
                && <path opacity="0.05" d="M21 1.5C31.7696 1.5 40.5 10.2304 40.5 21C40.5 31.7696 31.7696 40.5 21 40.5C10.2304 40.5 1.5 31.7696 1.5 21C1.5 10.2304 10.2304 1.5 21 1.5ZM21 38.1342C30.463 38.1342 38.1342 30.463 38.1342 21C38.1342 11.537 30.463 3.86579 21 3.86579C11.537 3.86579 3.86579 11.537 3.86579 21C3.86579 30.463 11.537 38.1342 21 38.1342Z" fill="white"/>
            </svg>}
            {theme === 'dark-theme' && downloadState === 'done' && <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="42" height="42" rx="21" fill="#121316"/>
                <rect x="5.5" y="5.5" width="31" height="31" rx="15.5" fill="white" fillOpacity="0.14"/>
                <path d="M21 12C23.3869 12 25.6761 12.9482 27.364 14.636C29.0518 16.3239 30 18.6131 30 21C30 23.3869 29.0518 25.6761 27.364 27.364C25.6761 29.0518 23.3869 30 21 30C18.6131 30 16.3239 29.0518 14.636 27.364C12.9482 25.6761 12 23.3869 12 21C12 18.6131 12.9482 16.3239 14.636 14.636C16.3239 12.9482 18.6131 12 21 12ZM19.8789 22.7756L17.8796 20.775C17.8079 20.7033 17.7228 20.6465 17.6292 20.6077C17.5355 20.5689 17.4351 20.5489 17.3338 20.5489C17.2324 20.5489 17.1321 20.5689 17.0384 20.6077C16.9448 20.6465 16.8597 20.7033 16.788 20.775C16.6432 20.9198 16.5619 21.1161 16.5619 21.3208C16.5619 21.5255 16.6432 21.7218 16.788 21.8666L19.3337 24.4123C19.4052 24.4843 19.4902 24.5415 19.5839 24.5805C19.6776 24.6195 19.778 24.6396 19.8795 24.6396C19.981 24.6396 20.0814 24.6195 20.1751 24.5805C20.2688 24.5415 20.3538 24.4843 20.4253 24.4123L25.6967 19.1396C25.7693 19.0682 25.8271 18.9831 25.8667 18.8893C25.9063 18.7955 25.927 18.6948 25.9274 18.5929C25.9279 18.4911 25.9082 18.3902 25.8695 18.296C25.8308 18.2018 25.7738 18.1162 25.7018 18.0442C25.6298 17.9721 25.5443 17.9151 25.4502 17.8762C25.3561 17.8374 25.2552 17.8176 25.1533 17.8179C25.0515 17.8183 24.9507 17.8388 24.8569 17.8783C24.763 17.9178 24.6779 17.9755 24.6064 18.048L19.8789 22.7756Z" fill="#0AC956"/>
                <path opacity="0.05" d="M21 1.5C31.7696 1.5 40.5 10.2304 40.5 21C40.5 31.7696 31.7696 40.5 21 40.5C10.2304 40.5 1.5 31.7696 1.5 21C1.5 10.2304 10.2304 1.5 21 1.5ZM21 38.1342C30.463 38.1342 38.1342 30.463 38.1342 21C38.1342 11.537 30.463 3.86579 21 3.86579C11.537 3.86579 3.86579 11.537 3.86579 21C3.86579 30.463 11.537 38.1342 21 38.1342Z" fill="white"/>
                <path d="M21 1.5C31.7696 1.5 40.5 10.2304 40.5 21C40.5 31.7696 31.7696 40.5 21 40.5C10.2304 40.5 1.5 31.7696 1.5 21C1.5 10.2304 10.2304 1.5 21 1.5ZM21 38.1342C30.463 38.1342 38.1342 30.463 38.1342 21C38.1342 11.537 30.463 3.86579 21 3.86579C11.537 3.86579 3.86579 11.537 3.86579 21C3.86579 30.463 11.537 38.1342 21 38.1342Z" fill="#0AC956"/>
            </svg>}
            {downloadState === 'downloading'  && <div style={{ width: '40px', position: 'absolute', left: '1px', top: '1px' }}>
                <CircularProgressbar
                    value={progress}
                    text={`${progress}%`}
                    strokeWidth={6}
                    styles={buildStyles({
                        textSize: '18px',
                        textColor: theme === 'light-theme' ? '#6C5CE7' : '#FFFFFF',
                        pathColor: '#9747FF',
                        trailColor: theme === 'light-theme' ? '#FFFFFF' : '#1E1F22',
                    })}
                />
            </div>}
        </button>
    )
}
