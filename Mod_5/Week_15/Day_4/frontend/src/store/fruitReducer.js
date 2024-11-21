//Constant variables for the action types
const ADD_FRUIT = 'fruit/addFruit';
const UPDATE_FRUIT = 'fruit/updateFruit';
const LOAD_FRUITS = 'fruit/loadFruits';


//action creator functions
export const addFruit = (newFruit) => {
    return {
        type: ADD_FRUIT,
        newFruit
    }
}

export const updateFruit = (newFruitData) => {
    return {
        type: UPDATE_FRUIT,
        newFruitData
    }
}

export const loadFruits = (fruits) => {
    return {
        type: LOAD_FRUITS,
        fruits
    }
}

//thunk action creator functions
export const fetchFruitsThunk = () => async (dispatch) => {
    const res = await fetch('MAKEBELIEVEURL');

    if (res.ok) {
        const fruits = await res.json();
        dispatch(loadFruits(fruits))
    }
}

export const addFruitThunk = (newFruit) => async (dispatch) => {
    const res = await fetch('/MAKEBELIEVE', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(newFruit)
    })

    if (res.ok) {
        const fruit = await res.json();
        dispatch(addFruit(fruit));
        return fruit;
    } else {
        return { message: "Hey this broke"}
    }
}



//initial state
const initialState = { allFruits: [], favFruit: null }

//reducer
const fruitReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRUIT:
            return { ...state, allFruits: [...state.allFruits, action.newFruit]}
        case UPDATE_FRUIT:
            {
                let fruitId = action.newFruitData.id;
                let ogFruit = state.allFruits.find((fruit) => fruit.id === fruitId);
                let indexOfFruit = state.allFruits.indexOf(ogFruit);
                let newState = { ...state }
                newState.allFruits[indexOfFruit] = action.newFruitData;
                return newState;
            }
        default:
            return state;
    }
}

export default fruitReducer;