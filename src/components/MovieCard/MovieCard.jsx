import './MovieCard.css'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

// pass movie object as props so we can access it by destructuring
const MovieCard = ({ movie }) => {
  // access to add movie that we created in context   
  const { addMovieToHome } = useContext(GlobalContext) 
  return (
    <div className="movie__card">
      <div className="poster__wrapper">
        {movie.poster_path ? (
            // backticks with temple literals
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
        // if there is no poster     
        ) : (
          <div className="fake__poster"></div>
        )}
      </div>
      <div className="info">
         <div className="header">
             <h3 className="title">{movie.title}</h3>
             <h4 className="release-date">
               {/* check for error in release date  */}  
              {movie.release_date ? movie.release_date.substring(0, 4) : "Not Disclosed" }
            
            </h4>
         </div>
         <div className="favorite">
          {/* trigger add movie to home on btn - send movie object accessed in the props */}
          <button className="btn" onClick={() => addMovieToHome(movie)}>Add to Favorites</button>
         </div>
      </div>
    </div>
  )
}

export default MovieCard