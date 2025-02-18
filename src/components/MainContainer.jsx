import React from 'react'
import VideoContainer from './VideoContainer'
import VideoTitleContainer from './VideoTitleContainer'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const {nowPlayingMovies}=useSelector((store)=>store.movies);
    if(!nowPlayingMovies) return;
    const mainMovie=nowPlayingMovies[0];
    const {original_title,overview,id}=mainMovie;
    console.log(mainMovie);
  return (
    <div>
      <VideoTitleContainer title={original_title} overview={overview}/>
    <VideoContainer movieId={id}/>
    
    </div>
  )
}

export default MainContainer
