import React from 'react'
import { Link } from 'react-router-dom';
import ToggleButton from '../components/ToggleButton'
import logo from '../logo.png';
import '../styles/StartScreen.css';

export default function StartScreen() {
  return (
    <div className="StartScreen">
        <div className='start-toggle'>
            <ToggleButton />
        </div>
        <header className="header">
            <img src={logo} className="logo" alt="logo" />
            <p>Welcome to</p>
            <p className='title'>Loader.fo</p>
        </header>
        <div className='container'>
            <div style={{ padding: '20px' }}>
                <Link to="/home">
                    <button className='start-button'>
                        Start Now 
                        <span style={{ marginLeft: '20px' }}>
                            &rarr;
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}
