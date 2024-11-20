import { useDispatch } from "react-redux";
import { addItem } from "../../store/cart";

function ProduceDetails({ produce }) {
  const dispatch = useDispatch();

  const cartItem = {};

  const addToCart = () => {
    dispatch(addItem(produce.id))
  }

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button onClick={addToCart}
          className={"plus-button" + (cartItem ? " selected" : "")}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
