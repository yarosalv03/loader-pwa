import React, { useContext } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeContext } from './Theme';
import Splash from './pages/Splash';
import Next from './pages/Next';
import StartScreen from './pages/StartScreen';
import Home from './pages/Home';
import Library from './pages/Library';
import PlaylistView from './pages/PlaylistView';
import Search from './pages/Search';
import SearchDetail from './pages/SearchDetail';
import Setting from './pages/Setting';
import MusicPlaying from './pages/MusicPlaying';
import SingleMusicPlaying from './pages/SingleMusicPlaying';
import store from './store';
import './App.css';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <Provider store={store}>
      <div className={`App ${theme}`}>
        <Router>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/next" element={<Next />} />
            <Route path="/start" element={<StartScreen />} />
            <Route path="/home" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/playlist/:playlistname" element={<PlaylistView />} />
            <Route path="/search" element={<Search />} />
            <Route path="/search/:search_content" element={<SearchDetail />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/playing/:id" element={<MusicPlaying />} />
            <Route path="/singleplaying/:id" element={<SingleMusicPlaying />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
