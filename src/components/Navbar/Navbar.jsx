import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <div className="container">
         <div className="menu">
             <ul className="menu-items">
                 <li>
                     <Link to="/" className="link">Favorite List</Link>
                 </li>
                 <li>
                     <Link to="/watched" className="link">Watched</Link>
                 </li>
                 <li>
                     <Link to="/add" className="link">Add</Link>
                 </li>
             </ul>
         </div>
      </div>
    </header>
  )
}

export default Navbar