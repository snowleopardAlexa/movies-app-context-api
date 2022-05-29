import './MovieCard.css'
import React from 'react'

// pass movie object as props so we can access it by destructuring
const MovieCard = ({ movie }) => {
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
              {movie.release_date ? movie.release_date.substring(0, 4) : "-" }
            
            </h4>
         </div>
      </div>
    </div>
  )
}

export default MovieCard