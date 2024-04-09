import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// import Message from '../components/Message'
import Menu from '../components/Menu'
import Playlist from '../components/Playlist'
import Chartlist from '../components/Chartlist'
import LoadmoreButton from '../components/LoadmoreButton'
import AddToPlaylist from '../components/AddToPlaylist'
import BottomMenu from '../components/BottomMenu'
import CountrySelect from '../components/CountrySelect'
import CreatePlaylist from '../components/CreatePlaylist'
import '../styles/Home.css';
import { getPlaylists } from '../reducers/playlistsSlice'
import { getSongs } from '../reducers/songsSlice'

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [charts, setCharts] = useState([]);
  const [displayAmount, setDisplayAmount] = useState(10);
  const [searchContent, setSearchContent] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('us');
  const [chartToAddToPlaylist, setChartToAddToPlaylist] = useState({});
  const [isShownAddToPlaylist, setIsShowsAddToPlaylist] = useState(false);
  const [isOpenedCreatePlaylistModal, setIsOpenedCreatePlaylistModal] = useState(false);
  const go2SearchDetail = (search_content) => {
    if (search_content !== '') navigate(`/search/${search_content}`)
  }
  const handleSearchInput = (e) => {
    setSearchContent(e.target.value);
  }
  const openCreatePlaylistModal = () => {
    setIsOpenedCreatePlaylistModal(true);
  }
  const closeCreatePlaylistModal = () => {
    setIsOpenedCreatePlaylistModal(false);
  }
  const showAddToPlaylist = (chartinfo) => {
    setChartToAddToPlaylist(chartinfo);
    setIsShowsAddToPlaylist(true);
  }
  const closeAddToPlaylist = () => {
    setIsShowsAddToPlaylist(false);
  }
  const loadMore = () => {
    setDisplayAmount(displayAmount > 90 ? 100 : displayAmount+10);
  }
  const changeCountry = (country) => {
    setDisplayAmount(10);
    setSelectedCountry(country);
  }
  const getCharts = async (videos) => {
    try {
      const temp = await Promise.all(
        videos.map(async (video) => {
          const response = await axios.get('https://noembed.com/embed?url='+video);
          return {"id": video.split('=')[1], "image": response.data.thumbnail_url,  "name": response.data.author_name, "title": response.data.title};
        })
      );
      setCharts(temp);
    } catch (error) {
      console.error(error);
    }
  };
  const setPlaylists = (playlists) => {
    dispatch(getPlaylists(playlists));
  }
  useEffect(() => {
    dispatch(getPlaylists(JSON.parse(localStorage.getItem('playlists')) || []));
    dispatch(getSongs(JSON.parse(localStorage.getItem('songs')) || []));
  }, [dispatch]);
  useEffect(() => {
    axios.get('https://loader.to/ajax/api.php?function=charts&api=dfcb6d76f2f6a9894gjkege8a44563255&country='+selectedCountry)
      .then(response => {
        const videos = response.data.videos.slice(0, displayAmount);
        getCharts(videos);
      })
      .catch(error => {
        console.error(error);
      });
  }, [displayAmount, selectedCountry]);
  return (
    <div className='Home'>
      {/* <Message type="error" />
      <Message type="success" />
      <Message type="info" /> */}
      <div className='home-header'>
        <Menu />
        <div className='home-title'>Home</div>
        <div></div>
      </div>
      <div className='home-search'>
        <input type="text" placeholder='Search' value={searchContent} onChange={handleSearchInput} />
        <span onClick={() => go2SearchDetail(searchContent)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.58332 17.5C13.9556 17.5 17.5 13.9556 17.5 9.58335C17.5 5.2111 13.9556 1.66669 9.58332 1.66669C5.21107 1.66669 1.66666 5.2111 1.66666 9.58335C1.66666 13.9556 5.21107 17.5 9.58332 17.5Z" stroke="#8391A1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.3333 18.3334L16.6667 16.6667" stroke="#8391A1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
      <div className='playlists'>
        <div className='playlists-label'>
          <div>Recent Playlists</div>
          <div className='playlists-view-all'>View All</div>
        </div>
        <div className='playlists-slider'>
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
        </div>
      </div>
      <div className='music-charts'>
        <div className='music-charts-label'>Music Charts</div>
        <CountrySelect changeCountry={changeCountry} />
        <div className='music-charts-result-label'>Results <span>({displayAmount})</span></div>
        <div className='charts-list'>
          {charts.map(chart => (
            <Chartlist key={chart.id} chartinfo={chart} showAddToPlaylist={showAddToPlaylist} />
          ))}
        </div>
        <LoadmoreButton loadMore={loadMore} />
      </div>
      {isShownAddToPlaylist && <AddToPlaylist chartinfo={chartToAddToPlaylist} openCreatePlaylistModal={openCreatePlaylistModal} closeAddToPlaylist={closeAddToPlaylist} />}
      {isOpenedCreatePlaylistModal && <CreatePlaylist closeModal={closeCreatePlaylistModal} setPlaylists={setPlaylists} />}
      <BottomMenu />
    </div>
  )
}
 