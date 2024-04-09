import React, { useState } from 'react';
import ChartlistActions from './ChartlistActions';
import ToPlaylistActions from './ToPlaylistActions';
import '../styles/Home.css';

export default function Chartlist({chartinfo, showAddToPlaylist}) {
  const [isShownToPlaylist, setIsShownToPlaylist] = useState(false);
  const toggleToPlaylist = () => {
    setIsShownToPlaylist(!isShownToPlaylist);
  }
  return (
    <div className='chart-list'>
        <div className='chart-list-content'>
            <img src={chartinfo.image} className='chart-list-image' alt="chart list" />
            {!isShownToPlaylist ? <div className='chart-list-info'>
                <div className='chart-list-header'>
                    <div className='chart-list-name'>{chartinfo.name}</div>
                    <div className='chart-list-title'>{chartinfo.title}</div>
                </div>
            </div> :
            <ToPlaylistActions chartinfo={chartinfo} showAddToPlaylist={showAddToPlaylist} />}
        </div>
        <ChartlistActions chartinfo={chartinfo} toggleDisplay={toggleToPlaylist} />
    </div>
  )
}
