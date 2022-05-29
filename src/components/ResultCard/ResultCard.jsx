import "./ResultCard.css";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

// pass movie object as props so we can access it by destructuring
const ResultCard = ({ movie }) => {
  // access to add movie that we created in context
  const { addMovieToFavoritelist, favoritelist } = useContext(GlobalContext);

  // store movies - check for object
  let storedMovie = favoritelist.find(o => o.id === movie.id);

  // we don't want to store movies - button disabled - movie already stored
  const favoritelistDisabled = storedMovie ? true : false;

  return (
    <div className="result__container">
      <div className="result__card">
      <div className="poster__wrapper">
        {movie.poster_path ? (
          // backticks with temple literals
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          // if there is no poster
          <div className="fake__poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {/* check for error in release date  */}
            {movie.release_date
              ? movie.release_date.substring(0, 4)
              : "Not Disclosed"}
          </h4>
        </div>
        <div className="favorite">
          {/* trigger add movie to favorite list on btn - send movie object accessed in the props */}
          <button 
            disabled={favoritelistDisabled}
            className="btn" 
            onClick={() => addMovieToFavoritelist(movie)}
           >
            Add to Favorites
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ResultCard;
