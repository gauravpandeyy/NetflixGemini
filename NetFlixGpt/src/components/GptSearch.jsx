import React from "react"
import GptSearchBar from "./GptSearchBar"
import GptMovieSuggestion from "./GptMovieSuggestion"
import { NETFLIX_BG } from "../utils/Constants"

const GptSearch = () => {
  return (
    <div className="">
      <div className="fixed -z-10">
        <img src={NETFLIX_BG} alt="logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch
