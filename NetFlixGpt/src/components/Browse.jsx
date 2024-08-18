import React from "react"
import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovie from "../hooks/usePopularMovie"
import GptSearch from "./GptSearch"
import { useSelector } from "react-redux"

const Browse = () => {
  const showgpt = useSelector((store) => store?.gpt?.showGptSearch)
  useNowPlayingMovies()
  usePopularMovie()
  return (
    <div>
      <Header />
      {showgpt ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/*
       
      MainContainer
      - video bg
      - video title
      Second Container
      -movie list*n
      - each movie list has its own container*n
      */}
    </div>
  )
}

export default Browse
