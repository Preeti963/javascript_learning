// What is an. array?
// an array is a collection of value stored in a single vaiable
//Title: Createing an array
 let colors =["red","blue","green"];
 console.log(colors)

 //array are written square brackets[], and values are seperated by commas
 // Title: Accessing array items
  let fruits=["apple","banana","mango"];
  console.log(fruits[0])
  console.log(fruits[2])

// arrays ues zero based indexing- meaning the first is at index

// title:using loops with array
 let username=["jhon","james","ruth"];
  for(let i=0; i<=username.length;i++){
    console.log(username[i])
  }
// userful array methods
let names=["apple","banana","mango"];
// add to end
names.push("coconut");
console.log(names)

// for remove from end
names.pop()
console.log(names)

// add to start
 names.unshift("pear")
 console.log(names)

// to remove to start
names.shift()
console.log(names)

//notes: arrays can hold any data tyepes: strings, numbers,booleans etc.
