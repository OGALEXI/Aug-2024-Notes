//npm create vite@latest client -- --template react

//Every functional component can accept "props"
//These are just arguments that can be passed in and used by
//the component

//Props are passed from parent to child
//This is called prop drilling 

//Props are passed in key value pairs

//Routing

//Your frontend application will be hosted on its own url

//Your server will be hosted on a different url
//So this means that anytime we talk about the frontend url paths
//they will not affect your backend endpoints

//(the only way to access backend endpoints from the frontend
// is through fetch requests)

//Client side routing
//If in the browser we go to a specific path we want to see a different
// "page" rendered on screen

//In react we do this by rendering specific components at specific paths

//to install react router

//npm i react-router-dom

//By convention your router should be in App.jsx

//Most important stuff to create a router

//import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//CreateBrowserRouter

//Creates a router, in which we specify all of the potential paths
//and their corresponding elements

//RouterProvider
//Whatever element gets the router provider, all of its children will also have access
//to the router

//you can use a layout element to keep a specific component on the page even if the route
//path changes



//React hooks
//They "hook" into cool react functionality

//Class components used to be the only components that could do cool stuff
//with state and side effects

//But the syntax was gross

//React hooks were created for functional components
//(they can only be used by them)

//to give them state and side effect functionality
//useNavigate
//useState
//useEffect
//useContext

//useState - Allows a component to create and update state variables
//useEffect - Allows a component to execute side effects after each render
//useContext - Allows components to use information from a distant ancestor component


//useState
//State - React does NOT care about local variables, and thus will not rerender the page if a local variable
//is changed

//state variables are variables that trigger a rerender if they are changed

//useState provides us with the variable AND a function to update the variable
//if react notices that you call the update function it will rerender

//to create state variables:
//import useState from react

//INSIDE of the functional component
// let [variableName, setVariableName] = useState(<optional default value>)


//useEffect

//A function that runs after its component renders on the screen

//you call the useEffect function right above the return of a functional component
//It is executed after every single rerender

//The only way for a side effect of useEffect to "trigger" rerender
//is for it to update the state

//dependancy array

//useEffect takes in two arguments
//callback, array

useEffect(() => {}, [])

//The dependancy array helps us limit how many times useEffect actually runs

//No matter what useEffect will run after the initial render

//Without it, useEffect will run every single rerender
//With it, we can tell it to only execute if one or more variables are changed