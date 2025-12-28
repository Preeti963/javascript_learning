//what is function
// function is like a reuseable block of code that performs apecific task
//instead of writting the same code again and again,
//we can just define a function once and call it whenever needed

// how to create a function
function greet(){
    console.log("Hello, welcome to java script");
}
// here greet is the function
//whem we call it, it will run code inside the curly braces {}

// calling the function
greet();
// calling a function commanding it to run

// title: function with parameters
function greetUser(name){
    console.log("hello",name);
}
greetUser("ram")

// the value you pass inside the () is called an argument
//name here is a parameter

//Title: function that return Values
function add(a,b){
    return a + b;
}

let result = add(3,5);
console.log(result)

// Bonus : Arrow function
//Arro function are a chorter way to write functions
const sayHi = () =>{
    console.log("hi")
}
sayHi()
//
// function sayHi(){
//     console.log("hi")
// }
