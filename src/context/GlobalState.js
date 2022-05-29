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

  // add movie 
  const addMovieToFavoritelist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_FAVORITELIST", payload: movie })
  };

  // remove movie 
  const removeMovieFromFavoritelist = (id) => {
      dispatch({ type: "REMOVE_MOVIE_FROM_FAVORITELIST", payload: id})
  }


  // we can access global context from every component in the app
  // thanks to props.children
  return (
    <GlobalContext.Provider
      value={{
        favoritelist: state.favoritelist,
        watched: state.watched,
        addMovieToFavoritelist,
        removeMovieFromFavoritelist
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
//
