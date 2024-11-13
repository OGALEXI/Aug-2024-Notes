import './App.css'
import Recipes from './Components/Recipes/Recipes'
import LandingPage from './Components/LandingPage/LandingPage'
import Layout from './Layout'
import Tutorials from './Components/Recipes/Tutorials'
import Quotes from './Components/Recipes/Quotes'
import Merch from './Components/Recipes/Merch'
import RecipeDetails from './Components/Recipes/RecipeDetails'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

let debrasCatsName = "Snowball"

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LandingPage catName={debrasCatsName} sonName="Derrick" />
      },
      {
        path: '/recipes',
        element: <Recipes />,
        children: [
          {
            path: ':recipeId',
            element: <RecipeDetails />
          }
        ]
      },
      {
        path: '/tutorials',
        element: <Tutorials />
      }, 
      {
        path: '/quotes',
        element: <Quotes />
      },
      {
        path: '/merch',
        element: <Merch />
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
