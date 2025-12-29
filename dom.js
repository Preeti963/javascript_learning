//What is the DOM?
// Dom stands for Document Object Model
//It's a tree like structure created by the browser when it loads
// your html
//with javascript we can access, modify and interacte with
// the html elements using the DOM

//selecting Elements: 3 common methods
//1. getElementByID
const heading =document.getElementById("main-heading")
// console.log(heading)
// 2. getElementByClassname(returns a collection)
const info = document.getElementsByClassName("info");
console.log(info)

//3. querySelector/querySelectorAll (morden and flexible)
 const btn = document.querySelector("button");// works for the first button only 
 const btns = document.querySelectorAll("button");// work of all button
 console.log(btns)

 //by querySelecto we can do both tag name and class name
//   const infos = document.querySelectorAll(".info");// for class name we have to use (.)lik in (".info")
//   console.log(infos)

  // for Id we use #
  const infos = document.querySelector("#main-heading")
  console.log(infos)