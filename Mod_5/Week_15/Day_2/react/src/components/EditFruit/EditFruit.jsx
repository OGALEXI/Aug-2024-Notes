import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateFruitAction } from "../../store/fruitReducer";
import { useNavigate } from "react-router-dom";

function EditFruit() {
    const [newName, setNewName] = useState('');
    const [newDescrip, setNewDescrip] = useState('');
    let id = 1;

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const updateFruit = (e) => {
        e.preventDefault();

        const newFruit = {
            id,
            name: newName,
            description: newDescrip
        }

        dispatch(updateFruitAction(newFruit));

        setNewName('');
        setNewDescrip('');

        navigate('/fruit-shop')
    }

    return (
      <>
        <form>
            <div>
                <label>New Name</label>
                <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
            </div>
            <div>
                <label>New Description</label>
                <input
                    type="text"
                    value={newDescrip}
                    onChange={(e) => setNewDescrip(e.target.value)}
                />
            </div>
            <button onClick={updateFruit}>Update a Fruit</button>
        </form>
      </>
    )
}
  
export default EditFruit
  