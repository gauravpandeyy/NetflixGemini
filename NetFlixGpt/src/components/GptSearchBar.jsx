import React, { useRef } from "react"
import lang from "../utils/languageConstants"
import { useDispatch, useSelector } from "react-redux"
import genAI from "../utils/openai"
import { options } from "../utils/Constants"
import { addGptMovieResult } from "../utils/GptSlice"
const GptSearchBar = () => {
  const dispatch = useDispatch()
  const searchText = useRef(null)
  const fetchMovieInTmdb = async (moviename) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        moviename +
        "&include_adult=false&language=en-US&page=1",
      options
    )
    const json = await data?.json()
    return json?.results
  }
  const handleGptSearchClick = async () => {
    try {
      // Fetch the generative model
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })
      const prompt =
        "Act as a movie recommendation system suggest some movie for the query " +
        searchText.current.value +
        " only give me names of 5 movies, comma separated like the example result given ahead gadar,sholay,don,golmal,koi mil gaya"

      // Generate content using the model
      const result = await model.generateContent(prompt)
      console.log(result)

      // Safeguard for undefined or unexpected result structure
      if (
        !result ||
        !result.response ||
        !result.response.candidates ||
        !result.response.candidates[0]
      ) {
        console.error("Unexpected result structure:", result)
        return
      }

      // Extract movie names from the result
      const geminiMoviesText =
        result.response.candidates[0].content?.parts[0]?.text
      if (!geminiMoviesText) {
        console.error("No movie names found in the response")
        return
      }

      // Split the movie names into an array
      const geminiMovies = geminiMoviesText
        .split(",")
        .map((movie) => movie.trim())
      console.log(geminiMovies)

      // Fetch movie details from TMDB for each movie
      const promiseArray = geminiMovies.map((movie) => fetchMovieInTmdb(movie))
      const tmdbResult = await Promise.all(promiseArray)

      // Dispatch results to the Redux store
      dispatch(
        addGptMovieResult({ GptResult: tmdbResult, gptMovies: geminiMovies })
      )
    } catch (error) {
      console.error("Error in handleGptSearchClick:", error)
    }
  }

  const langKey = useSelector((store) => store.config.lang)
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2  m-6 bg-black grid grid-cols-12"
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptPlaceholder}
        />
        <button
          className="py-2 px-4 col-span-3 m-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar
