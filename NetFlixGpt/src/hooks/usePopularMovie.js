import { useDispatch } from "react-redux"
import { addPopularMovies } from "../utils/moviesSlice"
import { useEffect } from "react"
import { options } from "../utils/Constants"
import { useSelector } from "react-redux"

const usePopularMovie = () => {
  const dispatch = useDispatch()
  const popularMovies = useSelector((store) => store.movies.popularMovies)
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
    const json = await data.json()
    dispatch(addPopularMovies(json.results))
  }

  //this will be called only once
  useEffect(() => {
    !popularMovies && getPopularMovies()
  }, [])
}
export default usePopularMovie
