
import { useEffect } from 'react';
import { options } from '../constants';
import { useDispatch } from 'react-redux';
import {  addPopularMovies } from '../MoviesSlice';

export const useFetchPopularMovies=(url)=>{
    const dispatch=useDispatch();
    const fetchPopularMovies=async()=>{
        const response=await fetch(url, options);
        const resData=await response.json();
        dispatch(addPopularMovies(resData.results));
        console.log("lists",resData.results);
      }
      useEffect(()=>{
        fetchPopularMovies();
      },[])
}