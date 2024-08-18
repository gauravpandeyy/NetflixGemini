import { options } from "../utils/Constants"
import { useDispatch, useSelector } from "react-redux"
import { addNowPlayingMovies } from "../utils/moviesSlice"
import { useEffect } from "react"

const useNowPlayingMovies = () => {
  const dispatch = useDispatch()
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies)
  const getNowMoviesPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    )
    const json = await data.json()
    dispatch(addNowPlayingMovies(json.results))
  }

  //this will be called only once
  useEffect(() => {
    !nowPlayingMovies && getNowMoviesPlaying()
  }, [])
}

export default useNowPlayingMovies
