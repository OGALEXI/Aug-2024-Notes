import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import FruitShop from './components/FruitShop/FruitShop';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import AddFruit from './components/AddFruit/AddFruit';

//Create a layout component so that Nav can be above everything else always

function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/fruit-shop',
        element: <FruitShop />
      },
      {
        path: '/add-fruit',
        element: <AddFruit />
      }
    ]
  }
])


function App() {

  return <RouterProvider router={router} />
}

export default App
