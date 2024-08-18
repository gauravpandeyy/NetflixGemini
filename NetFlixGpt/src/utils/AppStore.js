import { configureStore } from "@reduxjs/toolkit"

import UserReducer from "./UserSlice"
import moviesReducer from "./moviesSlice"
import gptReducer from "./GptSlice"
import configReducer from "./configSlice"
const AppStore = configureStore({
  reducer: {
    user: UserReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
})
export default AppStore
