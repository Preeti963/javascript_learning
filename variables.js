// Variables
// A variables is like a box where we can store information 
//for declaring a variable there are 3 methosds

var name ="Jhon"; // old style
let age="20"; // prefered for variable that can change
const country="Nepal"; // for values that don't change

// using variable
let name2="shyam";
console.log(name2);

//changing variable
let score =10;
score =20;
console.log(score);

// using const (value cant not be change)
const result="100";
result="200";
console.log(result);

// Rules for naming variables
//1. can contain letter,number,$,or _
//2. can't star with a number
//3. no space or huphense(-) allowed
//4. use camelcase(like: firstName,myAge)

//5. Type operator
console.log(typeof "hello"); // output: string
console.log(typeof 123); // output: number

// better to use === instade of ==

// we can use var before declaring variables
//example
console.log(a); // undefined
var a = 10;

// we cant use const with out declaring variables
//example
console.log(b); // Error
const b = 20;
