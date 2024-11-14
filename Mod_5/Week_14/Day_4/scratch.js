//React Context

//A way for us to create variables that can be accessed and updated by any of the 
//components that have access to them

//State variables being changed cause re-renders
//Because of this in order to create 

//useEffect is not related to state at all
//useEffect DOES NOT TRIGGER RERENDERS
//useEffect is a function that is executed AFTER a render happens


//Prop drilling/threading
//Context

//Prop drilling you have to pass props from parent to child
//To get props from parent to great grand child you have to go through every component

//Parent -> Child -> Grand Child -> Great Grand Child

//Context fixes this problem by allowing us to make variables accessible by a component
//and all of its ancestors

// (Parent) -> (Great Grand Child)

/* 
To create context you must:

import { createContext } from "react";

export const PupContext = createContext(); 


From here you need to "provide" this variable to any components
you want to give access to

The context that you've created has a provider on it:
Wrap this component around other components

<PupContext.Provider>
    <ComponentToUseContext />
</PupContext.Provider>



//PROP DRILLING IS COMPLETELY FINE IF
//You are prop drilling from parent to child
//ANY FURTHER THAN THAT you should consider context

//STATE MANAGEMENT BIG 3
//Prop drilling, context, redux

//PLEASE GET TO KNOW THEM ALL


Providers take in a prop called value 
 in this is where you put the actual context variable

<PupContext.Provider value={contextVariables}>
    <ComponentToUseContext />
</PupContext.Provider>


*/