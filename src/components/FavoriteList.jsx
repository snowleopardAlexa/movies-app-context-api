import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const FavoriteList = () => {
const { favoritelist } = useContext(GlobalContext)

  return (
    <div className="favoritelist__container">
    <div className="header">
      <h2 style={{textAlign: 'center'}}>Favorite List</h2>
    </div>  
    <div>
      {favoritelist.map((movie) => (
        <h1>{movie.title}</h1>
      ))}
    </div>
    </div>
  )
}

export default FavoriteList