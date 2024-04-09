import { createSlice } from '@reduxjs/toolkit'

export const playlistsSlice = createSlice({
  name: 'playlists',
  initialState: {
    playlists: []
  },
  reducers: {
    getPlaylists: (state, action) => {
      state.playlists = action.payload
    }
  }
})

export const { getPlaylists } = playlistsSlice.actions

export default playlistsSlice.reducer