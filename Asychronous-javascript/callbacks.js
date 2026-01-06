// what is callbacks?
// a callback function is simple a function passed as any argument to 
//another function - and it gets called back later, once a task is complete

function greetUser(name, callback){
    console.log("hi",name)
    console.log("hi",name)
    
    callback()
}

function sayBye(){
    console.log("Good bye")
}

greetUser("Ram", sayBye

)

//callback hello
//1. log in user
//2. fetch their data
//3. get their recent posts
//each step depends on the previpus one, so you must do them in order- and each step is
// asynchronous (they take some time).

function loginUser(name,callback){
    console.log(name)
    setTimeout(()=>{
        callback("Bimal")
    },3000)
}
loginUser("Bimal", function(user){
    console.log("user logged in", user)

    getUserData(user, function(){
        console.log(data);

        getUserPost(data,function(posts){
            console.log(posts)
        })
    })
})


//Refactoring to normal(clean code)
function onPostsShown(){
    console.log("all post displayed")
}
function onDataReceived(user){
    showposts(posts,onPostsShown)
}
function onUserLoggedIn(user){
    getUserData(user,onDataReceived)
}
loginUser("Bimal",onUserLoggedIn)