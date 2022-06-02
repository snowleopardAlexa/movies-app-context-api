import MovieControls from '../MovieControls/MovieControls'
import './MovieCard.css'


const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie__card">
      {movie.poster_path ? (
          <img 
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
       ) : (
        <div className="filler-poster"></div>      
      )}
    <div className="movie__icons">
      <MovieControls type={type} movie={movie} />
    </div>
    </div>
  )
}

export default MovieCard