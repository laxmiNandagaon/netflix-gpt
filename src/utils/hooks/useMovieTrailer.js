
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { options } from '../constants';
import { addBgTrailer } from '../MoviesSlice';
export const useMovieTrailer=(movieId)=>{
   console.log("movie id",movieId);
   const dispatch=useDispatch();
     const getMovieVideos=async()=>{
       const response=await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos',options);
       const resData=await response.json();
       const movieTrailors=resData.results?.filter(movie=>movie.type==='Trailer');
       const trailer=movieTrailors.length?movieTrailors[0]:resData.results[0];
       dispatch(addBgTrailer(trailer));
     }
     useEffect(()=>{
       getMovieVideos();
     },[])
}