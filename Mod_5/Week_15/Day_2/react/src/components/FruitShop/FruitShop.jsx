import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { loadFruitsAction } from "../../store/fruitReducer";
import { deleteFruitAction } from "../../store/fruitReducer";
import './FruitShop.css'

//USE DISPATCH -> FROM THIS COMPONENT we will be able to trigger the store
// to grab the fruits and put them into the state



function FruitShop() {
    const dispatch = useDispatch(); ///manipulate
    const fruits = useSelector((state) => state.fruitState.allFruits) //consume/subscribe

    const deleteFruit = (fruitId) => {
        dispatch(deleteFruitAction(fruitId))

    }

    useEffect(() => {
        dispatch(loadFruitsAction()); //Manipulating the state
    }, [])

    return (
      <>
        <h1>Welcome to the fruit shop!</h1>
        {
            fruits?.map((fruit) => (
                <div key={fruit.id} className="fruit-card">
                    <h2>{fruit.name}</h2>
                    <h3>{fruit.description}</h3>
                    <button onClick={() => deleteFruit(fruit.id)} className="delete-fruit">x</button>
 
                </div>
            ))
        }
      </>
    )
}
  
export default FruitShop