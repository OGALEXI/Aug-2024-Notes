import { Outlet } from "react-router-dom"
import NavBar from "../NavBar/NavBar"

function NavBarWrapper() {

    return (
      <div>
        <NavBar /> 
        {/* NavBar is rendered at the top always */}
        <Outlet />
        {/* Outlet is going to display any children */}

      </div>
    )
}
  
  export default NavBarWrapper