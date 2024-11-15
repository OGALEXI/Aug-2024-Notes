import { useParams } from "react-router-dom";

function FruitShow({ fruits }) {
  const { fruitId } = useParams();
  const fruit = fruits.find((fruit) => fruit.id === fruitId)
  
  return (
    <div>
      <h2>{fruit.name}</h2>
      <p>Color: {fruit.color}</p>
      <p>Sweetness: {fruit.sweetness}</p>
      <p>Seeds: {fruit.seeds}</p>
    </div>
  )
}

export default FruitShow;
