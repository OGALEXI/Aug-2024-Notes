import './App.css'
import LandingPage from './Components/LandingPage/LandingPage'
import Cats from './Components/Cats/Cats';
import ContactUs from './Components/ContactUs/ContactUs';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBarWrapper from './Components/NavBarWrapper/NavBarWrapper';
const router = createBrowserRouter([
  { 
    path: '/',
    element: <NavBarWrapper />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path: "/cats",
        element: <Cats />
      },
      {
        path: '/contact',
        element: <ContactUs />
      }
    ]}
])

function App() {

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}

export default App
