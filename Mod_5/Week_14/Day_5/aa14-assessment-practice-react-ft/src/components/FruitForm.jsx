import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple"
];

function FruitForm({ fruits }) {
  const [name, setName] = useState("");
  const [sweetness, setSweetness] = useState(1);
  const [color, setColor] = useState("orange");
  const [seeds, setSeeds] = useState("yes");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();


  useEffect(() => {
    const errObj = {};

    if (name.length < 3) {
      errObj.name = "Name must be 3 or more characters";
    } else if (name.length > 20) {
      errObj.name = "Name must be 20 characters or less";
    } else if (fruits.find((fruit) => fruit.name === name)) {
      errObj.name = "Name already exists";
    }

    if (sweetness < 1 || sweetness > 10) {
      errObj.sweetness = "Sweetness must be between 1 and 10";
    }

    setErrors(errObj);
  }, [name, sweetness, color, seeds])


  const onSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      sweetness,
      color,
      seeds
    });

    navigate('/')
  }

  return (
    <form
      className="fruit-form"
      onSubmit={onSubmit}
    >
      <h2>Enter a Fruit</h2>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <p className="errors">{errors.name}</p>
      <label>
        Select a Color
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          {COLORS.map(color => (
            <option
              key={color}
              value={color}
            >
              {color}
            </option>
          ))}
        </select>
      </label>
      <label>
        Sweetness
        <input
          type="number"
          name="sweetness"
          value={sweetness}
          onChange={(e) => setSweetness(e.target.value)}
        />
      </label>
      <p className="errors">{errors.sweetness}</p>
      <label>
        <input
          type="radio"
          value="no"
          name="seeds"
          onChange={() => setSeeds("no")}
        />
        No Seeds
      </label>
      <label>
        <input
          type="radio"
          value="yes"
          name="seeds"

          checked={seeds === "yes"}
          onChange={() => setSeeds("yes")}
        />
        Seeds
      </label>
      <button
        type="submit"

        disabled={Object.values(errors).length}
      >
        Submit Fruit
      </button>
    </form>
  );
}

export default FruitForm;
