import { createSlice } from "@reduxjs/toolkit"

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
    GptResult: null,
  },
  reducers: {
    toggleGptSearchView: (state, actions) => {
      state.showGptSearch = !state.showGptSearch
    },
    addGptMovieResult: (state, action) => {
      const { GptResult, gptMovies } = action.payload
      state.GptResult = GptResult
      state.gptMovies = gptMovies
    },
  },
})

export const { toggleGptSearchView, addGptMovieResult } = GptSlice.actions
export default GptSlice.reducer
