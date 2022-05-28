import "./Add.css";
import { useState } from "react";
//import MovieCard from "../MovieCard/MovieCard";

const Add = () => {
  const [query, setQuery] = useState("")
  // store api result - return the array of results useState([] - array of results)
  const [results, setResults] = useState([])

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    // fetch api from tmdb api via promises
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIES_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        // check for errors
        if(!data.errors) {
          // return api to the state
          setResults(data.results)
        } else {
          // if there is no errors - set results to an empty array
          setResults([])
        }
      });
  };

  return (
    <div className="search">
      <div className="input__container">
        <input
          type="text"
          placeholder="Search for Movie"
          value={query}
          onChange={onChange}
        />
      </div>
      {results.length > 0 && (
        <ul className="results">
          {results.map(movie => (
            <li>
              {movie.title}
            </li>
          ))}
        </ul>
        )
      }  
      </div>
  );
};

export default Add;
