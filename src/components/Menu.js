import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ToggleButton from './ToggleButton'
import '../styles/Menu.css';

export default function Menu() {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpened(isMenuOpened ? false : true);
    };
    return (
        <div className='Menu'>
            <div className='toggle-button' onClick={toggleMenu}>
                <div className='toggle-button-content'>
                    {!isMenuOpened ? <><svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H17" stroke="#8391A1" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M1 7H17" stroke="#8391A1" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', right: '7px', top: '7px' }}>
                        <circle cx="3.5" cy="3.5" r="3.5" fill="#0AC956"/>
                    </svg></> : <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 1L1 13M13 13L1 1" stroke="#8391A1" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>}
                </div>
            </div>            
            {isMenuOpened && <div className='menu-panel'>
                <div className='menu-header'>
                    <div className='menu-title'>Loader.fo</div>
                    <div className='theme-change'>
                        <div className='menu-toggle-label'>Theme</div>
                        <div className="menu-toggle">
                            <ToggleButton />
                        </div>
                    </div>
                </div>
                <div className='songs-info'>
                    <div>Songs: <span className='songs-info-value'>1230</span></div>
                    <div>Playlists: <span className='songs-info-value'>3</span></div>
                </div>
                <div className='menu-visit-site'>
                    <div className='menu-visit-site-label'>menu-Visit Our Website</div>
                    <Link to='/home' style={{ width: '100%' }}>
                        <button className='menu-visit-site-button'>
                            Loader.fo 
                            <span style={{ marginLeft: '20px' }}>
                                &rarr;
                            </span>
                        </button>
                    </Link>
                    <div className='menu-version'>Version - 305.9.1.1</div>
                </div>
            </div>}
        </div>
    )
}
