import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useMovieTrailer } from '../utils/hooks/useMovieTrailer';
import { options } from '../utils/constants';
import { addBgTrailer } from '../utils/MoviesSlice';

const VideoContainer = ({movieId}) => {
  const trailerVideo=useSelector(store=>store.movies?.movieTrailerBackground);
  useMovieTrailer(movieId);
 

  
  return (
    <div className='w-screen'>
      <iframe 
      className='w-screen aspect-video'
     src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"}
       title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  )
}

export default VideoContainer
