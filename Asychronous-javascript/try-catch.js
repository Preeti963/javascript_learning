async function getPosts(){
    try{
    
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
     const response1 = await fetch("https://jsonplaceholder.typicode.com/posts")
      const response2 = await fetch("https://jsonplaceholder.typicode.com/posts")

    if (response.ok){
        const  data =  await response.json();
        console.log(data)
    }else{
        throw new Error("something went wrong")
    }
  }catch(error){
        console.log(error)
    }
}
getPosts();
//try block runs your normalcode
//it anything inside it fails,it jumps  straight to the catch block
//this replaces the old .catch() method used with promises


