import React from 'react'
import '../styles/Library.css'

export default function LibrarySubTab() {
  return (
    <div className='library-sub-tab'>
        <div className='tab-btn all-tab'>All</div>
        <div className='tab-btn playlist-tab'>In The Playlist</div>
        <div className='tab-btn not-playlist-tab'>Not In The Playlist</div>
    </div>
  )
}
