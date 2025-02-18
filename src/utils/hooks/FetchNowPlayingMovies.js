
import { useEffect } from 'react';
import { options } from '../constants';
import { useDispatch } from 'react-redux';
import { addMovies } from '../MoviesSlice';

export const useNowPlayingMovies=(url)=>{
    const dispatch=useDispatch();
    const fetchNowPlayingMovies=async()=>{
        const response=await fetch(url, options);
        const resData=await response.json();
        dispatch(addMovies(resData.results));
        console.log("lists",resData.results);
      }
      useEffect(()=>{
        fetchNowPlayingMovies();
      },[])
}