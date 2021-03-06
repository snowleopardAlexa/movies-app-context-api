import "./FavoriteList.css";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import MovieCard from "../MovieCard/MovieCard";

const FavoriteList = () => {
  const { favoritelist } = useContext(GlobalContext);

  return (
    <div className="favoritelist__container">
      <div className="header">
        <h2 style={{ textAlign: "center" }}>Favorite List</h2>
      </div>
      {favoritelist.length > 0 ? (
        <div className="movie__grid">
          {favoritelist.map((movie) => (
            <MovieCard movie={movie} type="favoritelist" />
          ))}
        </div>
      ) : (
        <h2 className="no-movies">No movies found, add some!</h2>
      )}
    </div>
  );
};

export default FavoriteList;
