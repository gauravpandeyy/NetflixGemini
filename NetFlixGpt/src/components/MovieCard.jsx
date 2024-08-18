import React from "react"
import { IMG_CDN_URL } from "../utils/Constants"

const MovieCard = ({ posterpath }) => {
  if (!posterpath) return null
  return (
    <div className="w-36 md:w-48 pr-4">
      <img src={IMG_CDN_URL + posterpath} alt="Movie Image" />
    </div>
  )
}

export default MovieCard
