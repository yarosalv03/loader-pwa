import React from 'react'
import { Link } from 'react-router-dom'
import ToggleButton from '../components/ToggleButton'
import Menu from '../components/Menu'
import BottomMenu from '../components/BottomMenu'
import '../styles/Setting.css'

export default function Setting() {
  return (
    <div className='Setting'>
      <div className='setting-header'>
        <Menu />
        <div className='setting-title'>Setting</div>
        <div></div>
      </div>
      <div className='setting-panel'>
        <div className='setting-header'>
            <div className='theme-change'>
                <div className='setting-toggle-label'>Theme</div>
                <div className="setting-toggle">
                    <ToggleButton />
                </div>
            </div>
        </div>
        <div className='visit-site'>
          <div className='visit-site-label'>Visit Our Website</div>
          <Link to='/home' style={{ width: '100%' }}>
            <button className='visit-site-button'>
              Loader.fo 
              <span style={{ marginLeft: '20px' }}>
                  &rarr;
              </span>
            </button>
          </Link>
          <div className='setting-version'>Version - 305.9.1.1</div>
        </div>
      </div>
      <BottomMenu />
    </div>
  )
}
