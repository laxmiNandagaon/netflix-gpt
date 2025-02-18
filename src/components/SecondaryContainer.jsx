import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies);
  console.log(movies.nowPlayingMovies);
  return (
    <div className='bg-black w-full'>
      <div className='w-full -mt-44 relative z-10'>
      <MovieList title="NowPlaying Movies" movies={movies.nowPlayingMovies}/>
      <MovieList title="recently added Movies" movies={movies.nowPlayingMovies}/>
      <MovieList title="trending Movies" movies={movies.PopularMovies}/>
      <MovieList title="recemonded Movies" movies={movies.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer
