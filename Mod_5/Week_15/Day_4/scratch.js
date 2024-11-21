// npm create vite@latest frontend -- --template react

//useEffect is REACT 
//Hooks can only be used by functional components

//useEffect is a function that is executed after every render

//useEffect will at the very least, be executed after the first render

//We can pass it a dependency array so that it will only be called if an item
//inside of it triggers a rerender by changing
//so this limits the number of useEffect calls

//Most commonly we're fetching stuff inside of a useEffect


//useState allows us to create state variables aka variables 
//that if changed will trigger a rerender


//REACT REDUX

//useDispatch - Dispatch an action object (catapult) into the store to let the REDUCER manipulate
// the state

//useSelector - Subscribes/Consumes AKA Listens for changes in the state and returns
// the most recent version of it
//A change in the state will trigger a rerender of a function component

//useSelector returns the state OR a slice of the state if you don't want the whole thing

//const state = useSelector((state) => state)
//const sliceOfState = useSelector((state) => state.sliceOfState)

//const randoPieceOfState = useSelector((state) => state.fruits.favFruit.randoThing)



//Redux

//Redux has whats called a store, and the store holds the state of the app
//it also has a reducer which takes in action objects and updates the state accordingly

//You can dispatch action objects OR thunk functions

dispatch(loadFruits()) //ACTION OBJECT

dispatch(fetchFruitsThunk()) //THUNK FUNCTION

