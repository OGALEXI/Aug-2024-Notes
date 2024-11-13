import { Outlet } from "react-router-dom"
import NavBar from "./Components/NavBar/NavBar"

function Layout() {
    return (
      <div >
        <NavBar />

        <main>
            <Outlet />
        </main>
      </div>
    )
}
  
export default Layout
  