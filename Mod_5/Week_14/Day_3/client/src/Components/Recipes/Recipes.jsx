import { Outlet, Link } from 'react-router-dom'
import './Children.css'
const recipes = [
    { 
        id: 1,
        name: 'Apple Pie',
        ingredients: 'Apples, Cinnamon'
    },
    {
        id: 2,
        name: "Croissant",
        ingredients: 'Butter, Flour, Love'
    },
    {
        id: 3,
        name: 'Strawberry Shortcake',
        ingredients: 'Sugar, Spice, Everything nice'
    }
]

function Recipes() {
    return (
      <div>
        <h1>Debra's Recipes</h1>
        <section id="recipe-container">
        {
            recipes.map((recipe) => (
                <Link key={recipe.id} className="recipe-btn" to={`${recipe.id}`}>{recipe.name}</Link>
            ))
        }
        </section>
        <Outlet />
      </div>
    )
}
  
export default Recipes
  