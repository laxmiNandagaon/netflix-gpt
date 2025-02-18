import React from 'react'

const MovieCard = ({poster}) => {
  return (
    <div className="w-64 h-40 overflow-hidden rounded-lg shadow-md flex-shrink-0 ">
      <img 
        alt="nowplayingmovies"
        src={poster}
        className="w-full h-full object-cover" // Makes sure the image covers the full area of its container
      />
    </div>
  )
}

export default MovieCard
