import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const FavoriteList = () => {
const { favoritelist } = useContext(GlobalContext)

  return (
    <div>
      {favoritelist.map((movie) => (
        <h1>{movie.title}</h1>
      ))}
    </div>
  )
}

export default FavoriteList