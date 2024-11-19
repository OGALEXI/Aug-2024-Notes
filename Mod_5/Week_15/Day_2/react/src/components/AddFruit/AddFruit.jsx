import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFruitAction } from "../../store/fruitReducer";


function AddFruit() {
    const [ name, setName ] = useState('');
    const [ description, setDescription ] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();

        const newFruit = {
            name,
            description
        }

        dispatch(addFruitAction(newFruit))

        setName('');
        setDescription('');

        navigate('/fruit-shop')
    }

    return (
      <>
        <h1>Create a Fruit!</h1>
        <form>
            <div>
                <label>Fruit Name: </label>
                <input 
                    id="fruit-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Description: </label>
                <input 
                    id="description"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button onClick={onSubmit}>Create a Fruit</button>
        </form>
      </>
    )
}
  
export default AddFruit
  