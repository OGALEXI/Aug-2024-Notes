import './NavBar.css'

function NavBar({ firstname, lastname }) {

  return (
    <nav id="nav-bar">
        <div id="nav-links">
            <ul>
                <li className='nav-lis'>Home</li>
                <li className='nav-lis'>About</li>
                <li className='nav-lis'>Contact Us</li>
            </ul>
        </div>

        <p style={{color: "white"}}>{firstname} {lastname}</p>
    </nav>
  )
}

export default NavBar
