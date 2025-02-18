
import { useSelector } from 'react-redux';
import { nowPlayingMoviesUrl, popularMovies } from '../utils/constants';
import { useNowPlayingMovies } from '../utils/hooks/FetchNowPlayingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useFetchPopularMovies } from '../utils/hooks/useFetchPopularMovies';

const Browse = () => {
  useNowPlayingMovies(nowPlayingMoviesUrl);
  useFetchPopularMovies(popularMovies);
  
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/> 
    </div>
  )
}

export default Browse
