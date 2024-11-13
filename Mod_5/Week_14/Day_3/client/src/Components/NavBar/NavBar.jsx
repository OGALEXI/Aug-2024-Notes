import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar() {

    return (
      <nav id="nav-bar">
        <ul id="nav-list">
            <li className="linky"><Link className='linky-link' to="/">Home</Link></li>
            <li className="linky"><Link className='linky-link' to="/recipes">Recipes</Link></li>
            <li className="linky"><Link className='linky-link' to="/tutorials">Tutorials</Link></li>
            <li className="linky"><Link className='linky-link' to="/quotes">Quotes</Link></li>
            <li className="linky"><Link className='linky-link' to="/merch">Merch</Link></li>
        </ul>
      </nav>
    )
}
  
export default NavBar