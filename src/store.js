import { configureStore } from "@reduxjs/toolkit";
import playlistsReducer from "./reducers/playlistsSlice";
import songsReducer from "./reducers/songsSlice";

export default configureStore({
  reducer: {
    playlists: playlistsReducer,
    songs: songsReducer,
    devTools: process.env.NODE_ENV !== "production",
  }
})