// what is local storage
// a single key value storage available in modern browers
// stores data even after page reload or closing the browser
//only supports string values
//maximum size sub
// basic localStorage methods
localStorage.setItem("username","Hem123");

// console.log(localStorage.getItem("username"))
localStorage.removeItem("username")// it onlu removes ontone key

// to remove all at once we use
//localStorage.clear()
const user ={
    name:"jhon",
    age:"23"
}
localStorage.setItem("user",JSON.stringify(user))

const storedUser = localStorage.getItem("user")
console.log(storedUser.name)