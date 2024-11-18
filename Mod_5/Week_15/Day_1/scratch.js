//REDUX - State Manager 
//REDUX is not tied to react, we just happen to use them together often

//The STORE holds the state of an application (pretty much always an object state -> {})
//The store has a REDUCER inside of it and this is a list of all the way in which we can manipulate
//the state

//ACTIONS -> Functions that we send FROM components to the store (store gives it to reducer)
//          reducer then executes the action and updates the state

//SUBSCRIPTIONS -> Allowing a component to listen for state updates

//YOU SHOULD NEVER MANIPULATE THE STATE WITHOUT GOING THROUGH THE STORE/REDUCER

//install redux to get started 

//create a store -> createStore()

//create store takes in 3 arguments

//createStore(reducer, preloadedState, enhancer);

//Reducer - (required) - A function with a switch case (conditional statements) that takes in the curr state,
//                       updates the state based on actions, and returns the new state

//PreloadedState - (optional) - First version of your state object but with something already in it
// ex: { mascot: { name: "bob" } }

//Enhancer - (optional) - allows us to add extra functionality to the store

//Your reducer is most commonly going to live in its own file because reducers can be pretty big
//We also split up each slice of state into its own reducer

// STATE - { userState: {}, puppyState: {} }
//userReducer and a puppyReducer

//Since we commonly have multiple reducers, we have to combine them into one
//before we can create the store as the store can only have one reducer

//STORE EXAMPLE

import { createStore, combineReducers } from 'redux';

//import all reducers
import puppyReducer from './puppyReducer';
import userReducer from './userReducer';

//combine reducers into one big reducer
const rootReducer = combineReducers({
    userState: userReducer,
    puppyState: puppyReducer
});


//Configure our store so that it has access to the full application
//create our store 

const configureStore = () => {
    return createStore(rootReducer, /* OPTIONAL: preloadedState, enhancer */)
}

export default configureStore;


//ACTIONS - Objects that look like this: { type: "WHAT_TO_DO", payload: puppyObj }

let newPuppy = {
    name: 'Ralph'
}

let action = {
    type: "ADD_PUPPY",
    payload: newPuppy
}


//We are going make a function to create actions for us
//Action creator functions

//They take in a payload (optional) and they spit out an action object

const addPuppy = (newPuppy) => {
    return {
        type: 'ADD_PUPPY',
        payload: newPuppy
    }
}

let newPuppyActionObj = addPuppy({
    id: 1,
    name: "Ralphie"
})



//DISPATCHING ACTION
//We use a function called dispatch. We get it from the store

//store.dispatch(ACTION OBJECT)

//Sends an action to the store to manipulate the state

//THIS WOULD BE INSIDE A COMPONENT
store.dispatch({
    type: 'ADD_PUPPY',
    payload: newPuppy
})

//With the action creator
store.dispatch(addPuppy(newPuppy))


//EXAMPLE FORM SUBMIT FUNCTION

const onSubmit = async (e) => {
    e.preventDefault;

    const newPuppy = {
        name,
        age,
        ownerId
    }

    //FETCH TO THE DATABASE

    let res = await fetch('url', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(newPuppy)
    })

    if (res.ok) {
        //ADD THE PUPPY TO THE STATE
        store.dispatch(addPuppy(newPuppy))
    }

}

//WE WILL TALK ABOUT THUNKS -> allow redux to handle fetchs to the database 
//                             and then update the statehttps://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/react-redux/topics/redux/assets/ReactReduxNoBackend.png