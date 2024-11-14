import { useState } from "react";


function CreateCat() {
    let [name, setName] = useState('');
    let [age, setAge] = useState('');
    let [breed, setBreed] = useState('');


    const onSubmit = (e) => {
        e.preventDefault();

        const newCat = {
            name,
            age,
            breed,
        }

        console.log(newCat);

        setName('');
        setAge('');
        setBreed('');
    }

    return (
      <form>
        <h1>Create a Cat!</h1>
        <div>
            <label>Cat&apos;s Name</label>
            <input 
               id="cat-name"
               type="text" 
               value={name}
               onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div>
            <label>Age</label>
            <input 
                id="cat-age"
                type="text" 
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
        </div>
        <div>
            <label>Breed</label>
            <input 
                id="cat-breed"
                type="text" 
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
            />
        </div>
        <button onClick={onSubmit}>Create Cat</button>
      </form>
    );
  }
  
  export default CreateCat;
  