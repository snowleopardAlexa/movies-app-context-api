import './MovieControls.css'
import { AiFillEye, AiFillDelete } from 'react-icons/ai'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

const MovieControls = ({ movie, type }) => {
  const { removeMovieFromFavoritelist } = useContext(GlobalContext)
  return (
    <div className="card__controls">
      {type === 'favoritelist' && (
          <>
            <button className="control-btn">
              <AiFillEye />
            </button>
            <button className="control-btn" onClick={() => removeMovieFromFavoritelist(movie.id)}>
              <AiFillDelete />
            </button>
          </>
      )}
    </div>
  )
}

export default MovieControls