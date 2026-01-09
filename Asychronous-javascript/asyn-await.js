// Async await dont change asynchronous works - they just make it easier to read

// using promises
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => {
   return response.json()
}).then(data =>{
    console.lo(data)
}).catch(error =>{
    console.log("something went wrong")
})

// using async/await

 async function getPosts(){
    console.log(3)
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.lo(4)

    const  data =  await response.json();
    console.log(5)
    console.log(data)
}
console.log(1)
getPosts()
console.log(2)


//key points
// you must mark function as async to use await inside it
//await pauses the excution until the promises resolves
// but it doesn't block the main thread
