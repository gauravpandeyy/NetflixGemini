import React from "react"

import MovieList from "./MovieList"
import { useSelector } from "react-redux"
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  return (
    <div className=" bg-black">
      {/*
      movielist-populr,nowplaying,trending,horror
      */}
      <div className="-mt-54 relative z-20 pl-12">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Comedy Movies"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer
