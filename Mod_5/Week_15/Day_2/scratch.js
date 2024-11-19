//Redux

//The redux store holds the state of an application
//and it holds the reducers

//The reducer is just a list of actions and how to manipulate the state
// if a particular action is dispatched

//Typically we are going to have multiple reducers
//each for their own specific slice of state

//THE STATE IS ALMOST ALWAYS A GIANT OBJECT




//DISPATCH/useDispatch
//Dispatch is a function that takes in an action object and feeds it into the store
//store gives it to the reducer who then update the state
//DOESN'T BRING ANYTHING BACK
//ITS A CATAPULT it throws stuff to the store and manipulates the state

//Most commonly dispatch is executed inside of components 


//useSelector -> subscribes the component to the store, so that if the state changes
// it will get the updated version

//You can ask it to only give you small pieces of the state


//We have to remember that useEFFECT DOES NOT RUN UNTIL AFTER every render

//if you are manipulating the state inside of a useEffect that change will not be
//reflected until the next render

//Redux and react context are a lot to setup,
//but after that initial setup phase its pretty nice to interact with

//Redux should be your single source of truth
//So in your reducer you don't want to manipulate anything other than
//a copy of the state

//THUNKS

//Redux likes to be your single source of truth 
//YOU CAN MAKE FETCH REQUESTS TO A SERVER INSIDE OF ANY COMPONENT
//However, if you need to manipulate the state with the result of that request
//redux prefers that you use a thunk

//Thunks allow us to make a request to a server and then dispatch an action
//to manipulate the state
//Thunk action creators

const addCats = (cats) => {
    return {
        type: "ADD_CATS",
        payload: cats
    }
}

const fetchCats = (incomingCat) => async (dispatch) => {
    //MAKE A FETCH
    const res = await fetch('url', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(incomingCat)
    });

    if (res.ok) {
        let data = await res.json()
        //DISPATCH ACTION to manipulate the state
        dispatch(addCats(data))
    }

}