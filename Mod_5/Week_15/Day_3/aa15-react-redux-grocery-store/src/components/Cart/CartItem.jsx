import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateCount } from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  const dispatchRemoveItem = () => {
    dispatch(removeItem(item.id))
  }

  const dispatchUpdateItem = (count) => {
    dispatch(updateCount(item.id, count))
  }

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
        />
        <button
          onClick={() => dispatchUpdateItem(count + 1)}
          className="cart-item-button"
        >
          +
        </button>
        <button
          onClick={() => dispatchUpdateItem(count - 1)}
          className="cart-item-button"
        >
          -
        </button>
        <button
          onClick={dispatchRemoveItem}
          className="cart-item-button"
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
