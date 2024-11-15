import { Link } from "react-router-dom";
import { useFavFruit } from "../context/FavFruitContext";

const FavoriteFruit = ({ fruits }) => {
  const { favFruitId } = useFavFruit();
  const fruit = fruits.find((fruit) => fruit.id === favFruitId);

  return (
    <>
      <h2>Favorite Fruit</h2>
      <Link to={`/fruits/${fruit.id}`}>{fruit.name}</Link>
    </>
  )
}

export default FavoriteFruit;
