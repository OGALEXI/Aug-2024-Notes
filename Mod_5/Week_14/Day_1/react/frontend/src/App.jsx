import './App.css'
import NavBar from './Components/NavBar/NavBar';
import LandingPage from './Components/LandingPage/LandingPage';
import ProfilePage from './Components/ProfilePage/ProfilePage';
import { useState } from 'react';

function App() {
  let [toggle, setToggle] = useState(false); //<--- default value of false

  let firstname = 'Bob';

  function toggleToggle() {
    setToggle(!toggle)
  }

  return (
    <div>
      <NavBar firstname={firstname} lastname='Bobert'/> 
      {/* Here ^^ We are prop drilling username into the navBar component */}
      <button onClick={toggleToggle}>Toggle</button>
      {
        toggle ? (
          <LandingPage />
        ) : (
          <ProfilePage firstname={firstname} lastname='Bobert'/>
        )
      }
    </div>
  )
}

export default App
