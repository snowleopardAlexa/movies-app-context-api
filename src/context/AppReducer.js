/* eslint-disable import/no-anonymous-default-export */
// function that returns state data
// it tells our store what to do with data when actions are happening
// actions are objects that tell reducer how to change the state
// we dispatch the type that passes to a reducer
export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_FAVORITELIST":
      return {
        ...state,
        // it adds movie to the array of existing movies
        favoritelist: [action.payload, ...state.favoritelist],
      };
    case "REMOVE_MOVIE_FROM_FAVORITELIST":
      return {
        ...state,
        // it removes movie from the array of existing movies by id and filter method
        favoritelist: state.favoritelist.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case "ADD_MOVIE_TO_WATCHED":
        return {
            ...state,
            favoritelist: state.favoritelist.filter(
                (movie) => movie.id !== action.payload.id
            ),
            watched: [action.payload, ...state.watched],
        }  
    case "MOVE_TO_FAVORITELIST":
        return {
            ...state,
            // remove movie from watched
            watched: state.watched.filter(movie => movie.id !== action.payload.id),
            // adding movie back to favoritelist
            favoritelist: [action.payload, ...state.favoritelist]
        }
    case "REMOVE_FROM_WATCHED":
        return {
            ...state,
            watched: state.watched.filter(movie => movie.id !== action.payload)
        }    
    default:
      return state;
  }
};
