import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state - initial value of our context store
const initialState = {
  // we are saving movies to localstorage  
  favoritelist: localStorage.getItem('favoritelist') ? JSON.parse(localStorage.getItem("favoritelist")) : [],
  watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
// provide context to other components - access global context from other components
export const GlobalProvider = (props) => {
  // we take state
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // we store movies in localstorage 
  useEffect(() => {
   localStorage.setItem('favoritelist', JSON.stringify(state.favoritelist))
   localStorage.setItem('watched', JSON.stringify(state.watched))
  }, [state])

  // ACTIONS 
  // capital letter good practice

  // add movie to favorite list
  const addMovieToFavoritelist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_FAVORITELIST", payload: movie })
  };

  // remove movie from favorite list
  const removeMovieFromFavoritelist = (id) => {
      dispatch({ type: "REMOVE_MOVIE_FROM_FAVORITELIST", payload: id})
  }

  // add movie to watched
  const addMovieToWatched = movie => {
      dispatch({type: "ADD_MOVIE_TO_WATCHED", payload: movie})
  }

  // move to favorite list
  const moveToFavoritelist = movie => {
      dispatch({ type: "MOVE_TO_FAVORITELIST", payload: movie})
  }

  // remove from watched 
  const removeFromWatched = (id) => {
      dispatch({ type: "REMOVE_FROM_WATCHED", payload: id})
  }

  // we can access global context from every component in the app
  // thanks to props.children
  return (
    <GlobalContext.Provider
      value={{
        favoritelist: state.favoritelist,
        watched: state.watched,
        addMovieToFavoritelist,
        removeMovieFromFavoritelist,
        addMovieToWatched,
        moveToFavoritelist,
        removeFromWatched
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
//
