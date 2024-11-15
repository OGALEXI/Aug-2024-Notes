import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Navigation from './components/Navigation';
import FruitsIndex from './components/FruitsIndex';
import FruitShow from './components/FruitShow';
import FavoriteFruit from './components/FavoriteFruit';
import FruitForm from './components/FruitForm';
import SetFavoriteFruit from './components/SetFavoriteFruit';
import fruits from './mockData/fruits.json';

function Layout() {
  return (
    <>
      <h1>WELCOME TO THE FRUIT SHOP</h1>
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
        element: <FruitsIndex fruits={fruits}/>
      },
      {
        path: 'fruits/:fruitId',
        element: <FruitShow fruits={fruits}/>
      },
      {
        path: '/fruits/new',
        element: <FruitForm fruits={fruits}/>
      },
      {
        path: '/fav-fruit',
        element: <FavoriteFruit fruits={fruits}/>
      },
      {
        path: '/set-fav-fruit',
        element: <SetFavoriteFruit fruits={fruits}/>
      }, 
      {
        path: '*',
        element: <p>Page Not Found</p>
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
