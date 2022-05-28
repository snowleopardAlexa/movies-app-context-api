import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <div className="container">
         <div className="logo">
             <ul className="menu-items">
                 <li>
                     <Link to="/">Favorite List</Link>
                 </li>
                 <li>
                     <Link to="/watched">Watched</Link>
                 </li>
                 <li>
                     <Link to="/add">Add</Link>
                 </li>
             </ul>
         </div>
      </div>
    </header>
  )
}

export default Navbar