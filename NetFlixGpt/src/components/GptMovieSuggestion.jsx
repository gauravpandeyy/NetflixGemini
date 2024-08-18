import React from "react"
import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const GptMovieSuggestion = () => {
  const gpt = useSelector((store) => store?.gpt)
  const { GptResult, gptMovies } = gpt
  if (!gptMovies) return null
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-70">
      <div>
        {gptMovies.map((moviename, index) => (
          <MovieList
            key={moviename}
            title={moviename}
            movies={GptResult[index]}
          />
        ))}
      </div>
    </div>
  )
}

export default GptMovieSuggestion
