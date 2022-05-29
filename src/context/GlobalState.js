import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state - initial value of our context store
const initialState = {
  home: [],
  favoritelist: [],
};

// create context
export const GlobalContext = createContext(initialState);
// provide context to other components - access global context from other components
export const GlobalProvider = (props) => {
  // we take state
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  // capital letter good practice
  const addMovieToHome = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_HOME", payload: movie });
  };

  // we can access global context from every component in the app
  // thanks to props.children
  return (
    <GlobalContext.Provider
      value={{
        home: state.home,
        favoritelist: state.favoritelist,
        addMovieToHome: addMovieToHome,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
//
