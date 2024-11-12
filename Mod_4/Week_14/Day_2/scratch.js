//Initialize a vite application

//npm create vite@latest <project-name> -- --template react
//npm create vite@latest client -- --template react

//JSX components are pretty much just DOM nodes

/* A JSX component looks like this:

let pTag = (
    <p></p>
)


(
    <div>
        <h1></h1>
    </div>
)
*/

// let invalid = (
//     <p></p>
//     <p></p>
// )

let valid = (
    <>
        <p></p>
        <p></p>
    </>
)

//
//functional components
//functions that return a jsx component

/* 
SYNTAX

function ComponentName() {
    //Any variables or functions that this component will need

    return (
        <div>
            <p></p>
            <p></p>
        </div>
    )
}

export default ComponentName;


IN ANOTHER FILE WHEREVER YOU WANT TO RENDER THIS COMPONENT
import ComponentName from './filepath';

you're to place the component in another jsx element like this:

<ComponentName />

While you're developing in react you want to think in components
and split things up quite often

At the VERY LEAST every page should be its own component 
But again, try and split it up even more


Class is a reserved word in JS, so in JSX we can't use it, so instead in react we have
to use className

REACT ROUTER
Allows us to do client-side routing in react
We're able to tell react that certain url paths should display different components

i.e : /cats you want to see the <Cats /> component

http://your-react-app.com/cats

YOU HAVE ONE ROUTER
All of your paths will defined here

The first thing we have to do w react router is import it

npm i react-router-dom

then import these into app.jsx

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

You should define your router in App.jsx

Navigate component

Allows us to navigate from page to page 

Any pages that you want to have navigation ability
need to import the useNavigate component from react-router-dom

const navigate = useNavigate()

navigate('/cats')


/cats
/contactus


/cats/:catId

const router = createBrowserRouter([
    { 
        path: '/cats',
        children: [
            {
                index: true,
                element: <Cats />
            },
            {
                path: ":catId",       doesn't have a slash 
                element: <CatDetails />
            }
        ]
    }
])


Links and NavLinks
they are from react-router-dom

They are components that allow us to link to another route

the "to" attribute on a link tag takes in the path for the route you want to go to
they do not begin with slash

<Link to="cats">
</Link>

LINK COMPONENT the route is relative

aka if you are in a component that is being rendered at /cats
then any link tags you have are going to add on to the route

if we are in <Cats /> and this component is rendered at '/cats'

then this link:

<Link to="home">
</Link >
(Links are a tags)

is going to try to navigate to '/cats/home'

NavLinks
they are just like the Link tag but with added functionality
They're styled differently by default

(active vs inactive)

Just like navigate, link and navlink will only work for components
that have access to the router


How to get a navbar at the top of every page

*/