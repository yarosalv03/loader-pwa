import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Menu from '../components/Menu'
import BottomMenu from '../components/BottomMenu'
import Searchlist from '../components/Searchlist'
import CreatePlaylist from '../components/CreatePlaylist'
import AddToPlaylist from '../components/AddToPlaylist'
import { getPlaylists } from '../reducers/playlistsSlice'
import '../styles/Search.css'

export default function SearchDetail() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { search_content } = useParams();
    const [searchInput, setSearchInput] = useState(search_content);
    const [searchedCharts, setSearchedCharts] = useState([]);
    const [chartToAddToPlaylist, setChartToAddToPlaylist] = useState({});
    const [isShownAddToPlaylist, setIsShowsAddToPlaylist] = useState(false);
    const [isOpenedCreatePlaylistModal, setIsOpenedCreatePlaylistModal] = useState(false);
    const go2SearchDetail = (searchContent) => {
        if (searchContent !== '' && searchContent !== search_content) navigate(`/search/${searchContent}`)
    }
    const handleSearchInput = (e) => {
        setSearchInput(e.target.value);
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
    const setPlaylists = (playlists) => {
      dispatch(getPlaylists(playlists));
    }
    const getCharts = async (videos) => {
      try {
        const temp = await Promise.all(
            videos.map(async (video) => {
                return {
                    "id": video.id,
                    "name": video.channel.name,
                    "title": video.title,
                    "image": video.thumbnail,
                    "views": video.views.toLocaleString(),
                    "duration": video.durationString
                };
            })
        );
        setSearchedCharts(temp);
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
        axios.get('https://loader.to/ajax/api.php?function=s&api=dfcb6d76f2f6a9894gjkege8a44563255&q='+search_content)
            .then(response => {
                const videos = response.data.videos;
                getCharts(videos);
            })
            .catch(error => {
                console.error(error);
            });
    }, [search_content])
    return (
        <div className='search-detail'>
            <div className='search-header'>
                <Menu />
                <div className='search-title'>Search</div>
                <div></div>
            </div>
            <div className='search-input'>
                <input type="text" placeholder='Search for Music' value={searchInput} onChange={handleSearchInput} />
                <span onClick={() => go2SearchDetail(searchInput)}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.58332 17.5C13.9556 17.5 17.5 13.9556 17.5 9.58335C17.5 5.2111 13.9556 1.66669 9.58332 1.66669C5.21107 1.66669 1.66666 5.2111 1.66666 9.58335C1.66666 13.9556 5.21107 17.5 9.58332 17.5Z" stroke="#8391A1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18.3333 18.3334L16.6667 16.6667" stroke="#8391A1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
            </div>
            <div className='search-music-charts' style={{ marginBottom: '144px' }}>
                <div className='search-music-charts-result-label'>Results <span>({searchedCharts.length})</span></div>
                <div className='search-charts-list'>
                    {searchedCharts.map(chart => <Searchlist key={chart.id} chartinfo={chart} showAddToPlaylist={showAddToPlaylist} />)}
                </div>
            </div>
            {isShownAddToPlaylist && <AddToPlaylist chartinfo={chartToAddToPlaylist} openCreatePlaylistModal={openCreatePlaylistModal} closeAddToPlaylist={closeAddToPlaylist} />}
            {isOpenedCreatePlaylistModal && <CreatePlaylist closeModal={closeCreatePlaylistModal} setPlaylists={setPlaylists} />}
            <BottomMenu />
        </div>
    )
}
