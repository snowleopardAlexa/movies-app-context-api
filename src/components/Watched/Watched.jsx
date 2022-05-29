import './Watched.css'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import MovieCard from '../MovieCard/MovieCard'

const Watched = () => {
const { watched } = useContext(GlobalContext)

  return (
    <div className="watched__container">
      <div className="header">
        <h2 style={{ textAlign: "center" }}>Watched Movies</h2>
      </div>
      {watched.length > 0 ? (
      <div className="movie__grid">
      {watched.map((movie) => (
        <MovieCard movie={movie} type="watched" />
      ))}
      </div>
    ) : (
    <h2 className="no-movies">No movies in your watched list, add some!</h2>
  )}
  </div>
  )
}

export default Watched