// What is an API?
// API stands for Application Porgramming Interface - It is like a waiter in a resturant
// you(the client) ask for food
//the kitchen(server)prepare it
//the waiter(api)delivers it
// In simple terms, API is a bridge that allows two system to talks each other.

//API are everything - youtube,facebook, tiktok

// what is JSON
//JSON stands for (Javascript Object Notation)
//its used to store and exchange data between the server and the client
//it looks like javascript objects- but is actually just a string

//Difference between the object and the JSON STRING

// const obj ={name:"Jhon"};
// const json ='{"name":"Jhon"}';

//working with JSON uin javascript
//API send data as JSON strings, but our javascript code needs objects to work with.
//so we use teo methods - JSON.parse() and JSON.stringify()

//Converting JSON-> object
const json ='{"name":"mins"}';
const obj = JSON.parse(json);
console.log(obj.name)

//converting Object -> JSON

const user = {name:"ram"};
const jsongstring = JSON.stringify(user);
console.log(jsongstring)

//using fetch to get data
fetch("https://jsonplaceholder.typicode.com/posts").then(response => {
   return response.json()
}).then(data =>{
    console.log
}).catch(error =>{
    console.log("somwthing went wrong")
})