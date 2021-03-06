import './MovieControls.css'
import { AiFillEye, AiFillDelete, AiFillEyeInvisible } from 'react-icons/ai'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

const MovieControls = ({ movie, type }) => {
  const { removeMovieFromFavoritelist, addMovieToWatched, moveToFavoritelist, removeFromWatched } = useContext(GlobalContext)
  return (
    <div className="card__controls">
      {type === 'favoritelist' && (
          <>
            <button className="control-btn" onClick={() => addMovieToWatched(movie)}>
              <AiFillEye />
            </button>
            <button className="control-btn" onClick={() => removeMovieFromFavoritelist(movie.id)}>
              <AiFillDelete />
            </button>
          </>
      )}

      {type === "watched" && (
        <>
          <button className="control-btn" onClick={() => moveToFavoritelist(movie)}>
          <AiFillEyeInvisible />
          </button>

          <button className="control-btn" onClick={() => removeFromWatched(movie.id)}>
           <AiFillDelete />
          </button>
        </>
      )}
    </div>
  )
}

export default MovieControls