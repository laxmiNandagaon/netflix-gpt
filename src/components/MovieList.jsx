import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {
    
    return (
      <div className="pl-12 ">
        <h1 className="text-2xl font-bold mb-4 text-white">{title}</h1>
        <div className="flex overflow-x-auto ">
            <div className="flex space-x-4">
          {movies?.map(movie => (
            <MovieCard 
              key={movie.id} 
              poster={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} 
            />
          ))}</div>
        </div>
      </div>
    );
  }
  export default MovieList;