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

