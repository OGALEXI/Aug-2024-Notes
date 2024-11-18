
//Reducer function takes in the curr state and an action
//we give state a default value in case there isn't anything in state yet
//Reducers use a switch case to determine what to do if a certain action is dispatched

//ACTIONS - Objects that look like this: { type: "WHAT_TO_DO", payload: puppyObj }

//NEW PUPPY PAYLOAD
let newPuppy = {
    id: 1,
    name: 'Ralph'
}

//ACTION
let action = {
    type: "ADD_PUPPY",
    payload: newPuppy
}

//CURR STATE
let currState = {
    allPuppies: {},
    userPuppies: {}
}


const puppyReducer = (state = {}, action) => {
    switch (action.type) { //
        case 'ADD_PUPPY':
            let newPuppy = action.payload
            const newState = { ...state };
            newState.allPuppies[newPuppy.id] = newPuppy;
            newState.userPuppies[newPuppy.id] = newPuppy;
            return newState; // SEND BACK THE NEW VERSION OF THE PUPPY STATE
        case 'DELETE_PUPPY':
            const newState2 = { ...state };
            delete newState2.allPuppies[action.payload.id]
            delete newState2.userPuppies[action.payload.id]
            return newState2;
    }
}

export default puppyReducer;