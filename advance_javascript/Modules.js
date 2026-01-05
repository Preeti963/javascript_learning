//javascript modules
// js modules lets you 
//- split your code into seperate file
//- making it easier to maintain
//-reuse
//-organize

// modules can export varables, function or classes from one file and 
//import them to another

// exporting
//1. Named Export

import{add,subtract}from"./math.js"
console.log(add,(1,2))

//2.default export
import nepal from "./greet.js"
console.log(nepal("name"))

//mix default and  export
import greet,{greet2,greet3}from './greet.js'

//renaming imports
 import{add as getResults} from "./math.js"
  console.log(getResults(2,3))