// what is scope in javascript
// where a variable is accessible in your code.

//1. Global scope
//2. function(local) scope
//3.globall scope

//1. global scope

let username ="Mose";
 function greet(){
    // console.log(username);
 }

 greet();
//   console.log(username)
  //user is accessible everwhere, it is a global

  //2. function scope
  function sayHello(){
    let message ="hi"
    // console.log(message)
  }
  sayHello()
//   console.log(message)

  //3. Block scope

//    let condition = true;
//     if(condition === true){
//         let age ="Pokhara";
//         var country="Nepal";
//     }
    //  console.log(age)
    //  console.log(city)
     console.log(country)
// const and let respect block scope(like in if, for etc)
// var is not bock scope - its function scoped, which can cause bugs
