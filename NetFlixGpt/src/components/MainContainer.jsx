import React from "react"
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"
import { useSelector } from "react-redux"

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies)
  //if movie is null return this is also known as early return
  if (!movies) return
  const mainmovie = movies[0]

  const { original_title, overview, id } = mainmovie

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieid={id} />
    </div>
  )
}

export default MainContainer
