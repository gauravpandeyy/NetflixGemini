import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { options } from "../utils/Constants"
import { addTrailerVideo } from "../utils/moviesSlice"
import { useSelector } from "react-redux"
const useMovieTrailer = (movieid) => {
  const dispatch = useDispatch()
  const movietrailer = useSelector((store) => store.movies.trailerVideo)
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US&page=1`,
      options
    )
    const json = await data.json()

    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    )
    const trailer = filteredData.length ? filteredData[0] : json.results[0]

    dispatch(addTrailerVideo(trailer))
  }
  useEffect(() => {
    !movietrailer && getMovieVideo()
  }, [])
}

export default useMovieTrailer
