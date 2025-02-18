import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        movieTrailerBackground:null,
        PopularMovies:null
    },
    reducers:{
        addMovies:(state,action)=>{
           state.nowPlayingMovies=action.payload
        },
        addBgTrailer:(state,action)=>{
            state.movieTrailerBackground=action.payload
         },
         addPopularMovies:(state,action)=>{
              state.PopularMovies=action.payload;
         }
    }
});
export const {addMovies,addBgTrailer,addPopularMovies}=MoviesSlice.actions;
export default MoviesSlice.reducer;