import React,{ useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../Theme'
import Menu from '../components/Menu'
import BottomMenu from '../components/BottomMenu'
import '../styles/Search.css'

export default function Search() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const [searchContent, setSearchContent] = useState('');
  const [searchHistories, setSearchHistories] = useState([]);
  const saveSearchHistory = (search_content) => {
      let histories = JSON.parse(localStorage.getItem('searchhistory')) || [];
      for (let historie of histories) {
          if (historie === search_content) {
              // alert('Already Saved!');
              return;
          }
      }
      histories.unshift(search_content);
      setSearchHistories(histories);
      localStorage.setItem('searchhistory', JSON.stringify(histories));
  }
  const deleteHistory = (history) => {
    let histories = JSON.parse(localStorage.getItem('searchhistory')) || [];
    const idToRemove = histories.indexOf(history);
    if (idToRemove !== -1) {
      histories.splice(idToRemove, 1);
  }
    setSearchHistories(histories);
    localStorage.setItem('searchhistory', JSON.stringify(histories));
  }
  const go2SearchDetail = (search_content) => {
    if (search_content !== '') {
      saveSearchHistory(search_content);
      navigate(`/search/${search_content}`);
    }
  }
  const handleSearchInput = (e) => {
    setSearchContent(e.target.value);
  }
  useEffect(()=> {
    let histories = JSON.parse(localStorage.getItem('searchhistory')) || [];
    setSearchHistories(histories);
  }, [])
  return (
    <div className='Search'>
      <div className='search-header'>
        <Menu />
        <div className='search-title'>Search</div>
        <div></div>
      </div>
      <div className='search-input'>
        <input type="text" placeholder='Search for Music' value={searchContent} onChange={handleSearchInput} />
        <span onClick={() => go2SearchDetail(searchContent)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.58332 17.5C13.9556 17.5 17.5 13.9556 17.5 9.58335C17.5 5.2111 13.9556 1.66669 9.58332 1.66669C5.21107 1.66669 1.66666 5.2111 1.66666 9.58335C1.66666 13.9556 5.21107 17.5 9.58332 17.5Z" stroke="#8391A1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.3333 18.3334L16.6667 16.6667" stroke="#8391A1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
      <div className='search-history'>
        {searchHistories.map(history => (
          <div className='search-history-row' key={history}>
            <div className='search-history-item' onClick={() => go2SearchDetail(history)}>{history}</div>
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
          </div>
        ))}
      </div>
      <BottomMenu />
    </div>
  )
}
