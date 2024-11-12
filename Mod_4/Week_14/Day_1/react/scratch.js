//We've been using vanilla JS, HTML, and CSS to build our frontend applications
//In JS we've been using the DOM to manipulate our web pages

//React is a frontend library that helps us creates big frontend applications 
//pretty quickly

//Helps us with the creation and updating of DOM nodes

let p = document.createElement('p')

document.getElementById('idk').appendChild(p)

//React and Angular

//Python -> Django


///React uses JSX Javascript and XML

// JSX -> Javascript and HTML :)

//Opinionated, Unopionated 

//React doesn't care about a lot of stuff, we can layout our pages however we want

//create-react-app -> set up the boiler plate for us

//Vite -> The new and improved create-react-app that sets up react for us
//but with less additional features

//React is all about components -> how can we break up the pieces of our website (UI)
//into reusable baby components

//React is combinations of parent and child components

//Props -> 

//To create a vite project 
//Open up a terminal in whatever directory you want the frontend app to live in

//npm create vite@latest <project-name> -- --template react

//npm create vite@latest frontend -- --template react

//You can create jsx elements in variables in react
//You want to wrap JSX in parenthesis

//Every piece of JSX (one element aka one parenthesis) MUST HAVE
//ONE ROOT TAG it cannot have two elements on the same level at the root


//VALID
let navBar = (
    <div>
        <h1>Hiii</h1>
        <p></p>
    </div>
)

//NOT COOL
// let navBar2 = (
//     <p></p>
//     <p></p>
// )

//React created a cute lil tag for us called a fragment
//This is what you use if you don't want a root element that you can
//manipulate (aka you just want the stuff inside)
let navBar3 = (
    <>
        <p></p>
        <p></p>
    </>
)

//JSX -> camelCase

//React creates what we call the virtual DOM 
//to put together all of jsx into actual html and javascript

//Any time you see react using "render" its creating a virtual dom
//and then feeding the real html and JS into the browser

//In react you can split apart pieces of the UI into components
//USing JSX you can assemble these components into one beautiful webpage
//In order to do this we use function components

//WHY? do we do this over just creating them in variables?

//Function components have more features than variables do
//State management 

//Class components -> older way to create components


//Functional components
//is a function that returns a single JSX element
//You can have other JSX elements nested inside of it 
//The naming convention for function components is PascalCase


//What if you want to give a JSX element a class?
//The keyword class is reserved in JS, so in JSX we have to use className

//"Passing props" 
//When we have child components inside of parents we sometimes need to pass
//variables from the parent to the child

//Parents can pass DOWN (you can't go up) variables/functions/any javascript
// to children using what we call "prop drilling"
//Try and use this sparingly

//If you're passing lots of props from parent to child you should refactor to use
//more sophisticated state management

//So every JSX element can accept "props"

//In the parent component, you go to the child component you can define props as
//key value pairs

//in the child component you can access these props in the parameters of the function 
//component

// function functionalComponent(PROPS) {

// }

//Conditionally rendering jsx components

//We're either just gonna use && or we're gonna use ternary operators


{
    (firstname) && (
      <h1>Hii</h1>
    )
}

// (firstname) <-- If firstname is TRUTHY 
// && render/return something
// (
// <h1>Hii </h1> <- What do we want to render
//)

//if you want to simulate navigation you will want to use
//react router