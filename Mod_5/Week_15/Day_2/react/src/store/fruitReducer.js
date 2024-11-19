import { fruitData } from "./fruitData";

export const loadFruitsAction = () => {
    return {
        type: 'LOAD_FRUITS'
    }
}

export const addFruitAction = (newFruit) => {
    return {
        type: 'ADD_FRUIT',
        payload: newFruit
    }
}

export const deleteFruitAction = (fruitId) => {
    return {
        type: 'DELETE_FRUIT',
        payload: fruitId
    }
}

export const updateFruitAction = (newFruitData) => {
    return {
        type: 'UPDATE_FRUIT',
        payload: newFruitData
    }
}


const initialState = { allFruits: fruitData }

const fruitReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'LOAD_FRUITS':
            return state
        case 'ADD_FRUIT':
            //Give fruit an id
            const newFruit = {
                ...action.payload,
                id: state.allFruits.length + 1
            }

            let newFruitArr = [...state.allFruits, newFruit]
            return { ...state, allFruits: newFruitArr }

        case 'DELETE_FRUIT':
            let updatedFruits = state.allFruits.filter((fruit) => fruit.id !== action.payload);
            return { ...state, allFruits: updatedFruits}

        case 'UPDATE_FRUIT':
            let fruitPayload = action.payload;
            let fruit = state.allFruits.find((fruit) => fruit.id === fruitPayload.id)
            let fruitIndex = state.allFruits.indexOf(fruit);
            let newState = { ...state }
            newState.allFruits[fruitIndex] = fruitPayload;
            return newState;
        default:
            return state;
    }
}

export default fruitReducer;