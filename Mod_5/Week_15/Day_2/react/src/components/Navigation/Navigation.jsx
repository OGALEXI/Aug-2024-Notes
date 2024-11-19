import { Link } from 'react-router-dom'
import './Nav.css'

function Navigation() {

    return (
      <nav id="nav-bar">
        <Link to='/'>Home</Link>
        <Link to='/fruit-shop'>Fruit Shop</Link>
        <Link to="/add-fruit">Add a Fruit</Link>
      </nav>
    )
}
  
export default Navigation