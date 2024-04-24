-- dont forget to give an unique key while using a map in order for react to identify each restaurantcard so that rerendering of existing cards everytime a new restaurantcard comes up can be avoided., giving unique keys woruld ultimately make our app faster

-- index as a key is not recommended but it is obviously better than nothing at all

=====================================================================

# Two Types of Export/Import:-

1. (can be done only once inside a fail and the export is written at the end)
   export default Component;
   import component from "path";

2. (this kind of export involves writing an export keyword in front of the component or the variable itself. multiple exports can be done in a single file)
   export const Component;
   import { Component } from "path";

=====================================================================

# React Hooks (generally, all these function's names start with an "use")

(normal Js utility functions)

-- useState() -> provides state variables in react
_whenever a state variable changes, React immediately re-renders that particular component_

-- useEffect()
_after rendering of a component, useEffect() is called_
->if there is no dependency array present in the syntax then useEffect is called on every render.
->but if there is an empty dependency array present ("[]"), then useEffect is called only on the initial render i.e., just once.
->and if the dependency array has some default value inside it, then everytime that value is changed useEffect is called.

=====================================================================

--whenever a state variable is updated, the component inside which it is present -> React triggers a reconciliation cycle (re-renders the component)

=====================================================================

# 2 types of Routing in web apps

i. client-side routing:- (_single-page application_ by React using Link instead of traditional anchor tags)

this avoids loading the different pages again and again, but instead here React just loads components and prevents a complete reload.

ii. server-side routing

=====================================================================
