//ACTION TYPES
const ADD_ITEM = 'cart/ADD_ITEM';
const REMOVE_ITEM = 'cart/REMOVE_ITEM';
const UPDATE_COUNT = 'cart/UPDATE_COUNT';

//ACTION CREATORS
export const addItem = (produceId) => {
    return {
        type: ADD_ITEM,
        produceId
    }
}

export const removeItem = (produceId) => {
    return {
        type: REMOVE_ITEM,
        produceId
    }
}

export const updateCount = (produceId, count) => {
    if (count < 1) return removeItem(produceId);

    return {
        type: UPDATE_COUNT,
        produceId,
        count
    }
}


//REDUCER
export default function cartReducer(state = {}, action) {
    switch (action.type) {
        case ADD_ITEM:
            return { 
                ...state, 
                [action.produceId]:  {
                    id: action.produceId,
                    count: 1
                }
            };
        case REMOVE_ITEM:
            {
                const newState = { ...state };
                delete newState[action.produceId];
                return newState;
            }
        case UPDATE_COUNT:
            {
                const newState = { ...state };
                newState[action.produceId] = {
                    id: action.produceId,
                    count: action.count
                }
                return newState
            }
        default:
            return state;
    }
}