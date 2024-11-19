import { fruitData } from "./fruitData";

export const loadFruitsAction = () => {
    return {
        type: 'LOAD_FRUITS',
        payload: fruitData
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


const fruitReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_FRUITS':
            let newState = { ...state };
            newState.allFruits = action.payload;
            return newState;
        case 'ADD_FRUIT':
            //Add fruit to the database
            action.payload.id = fruitData.length + 1;
            fruitData.push(action.payload);
            return state
        case 'DELETE_FRUIT':
            fruitData.splice(action.payload - 1, 1);
            let newState2 = { ...state, allFruits: fruitData}
            return newState2;
        default:
            return state;
    }
}

export default fruitReducer;