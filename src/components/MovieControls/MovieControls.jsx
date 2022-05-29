import './MovieControls.css'
import { AiFillEye, AiFillDelete } from 'react-icons/ai'

const MovieControls = ({ movie, type }) => {
  return (
    <div className="card__controls">
      {type === 'favoritelist' && (
          <>
            <button className="control-btn">
              <AiFillEye />
            </button>
            <button className="control-btn">
              <AiFillDelete />
            </button>
          </>
      )}
    </div>
  )
}

export default MovieControls