import './NavBar.css'
import { Link } from 'react-router-dom'
function NavBar() {
  
    return (
      <nav id="gl-nav">
        <div id="linkie-box">
            <Link className='nav-links' to="/">Home</Link>
            <Link className='nav-links' to="/cats">Cats</Link>
            <Link className='nav-links' to="/contact">Contact Us</Link>
        </div>
      </nav>
    )
}
  
export default NavBar