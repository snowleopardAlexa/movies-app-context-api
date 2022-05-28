/* eslint-disable no-undef */
import "./Add.css";
import { useState } from "react";

const Add = () => {
  const [query, setQuery] = useState("");

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    // fetch API from TMDB with promises
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIES_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
    .then((res) = res.json())
    .then((data) => {
      console.log(data)
    })
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
    </div>
  );
};

export default Add;
