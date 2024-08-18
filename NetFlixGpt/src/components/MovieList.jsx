import React from "react"
import MovieCard from "./MovieCard"
const MovieList = ({ title, movies }) => {
  if (Array.isArray(movies) && movies.length > 0) {
    return (
      <div className="p-6">
        <h1 className="text-3xl text-white py-6">{title}</h1>
        <div className="flex overflow-x-scroll">
          <div className="flex">
            {movies.map((movie) => (
              <MovieCard key={movie.id} posterpath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    )
  } else {
    return <div>Movie List </div>
  }
}

export default MovieList
