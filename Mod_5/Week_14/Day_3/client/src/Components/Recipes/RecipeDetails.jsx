import { useParams } from "react-router-dom"

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


function RecipeDetails() {
    const { recipeId } = useParams();

    const currRecipe = recipes[Number(recipeId) - 1];

    return (
      <div id="rec-det-box">
        <h1>{currRecipe.name}</h1>
        <p>
            This recipe is so simple, all you need is:
            <br/>
            <br/>
            {currRecipe.ingredients}
        </p>
      </div>
    )
}
  
export default RecipeDetails
  