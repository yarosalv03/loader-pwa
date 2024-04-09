import { createSlice } from '@reduxjs/toolkit'

export const songsSlice = createSlice({
  name: 'songs',
  initialState: {
    songs: []
  },
  reducers: {
    getSongs: (state, action) => {
      state.songs = action.payload
    }
  }
})

export const { getSongs } = songsSlice.actions

export default songsSlice.reducer