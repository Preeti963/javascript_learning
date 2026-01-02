//Regular function
// const user ={
//     name:"Jhon",
//     age:"23",
//     greet: function(){
//         console.log("hello"+this.age)
//     }
// }
// user.greet();

//Arrow function
const user ={
    name:"zin",
    age:"34",
    greet: ()=> {
        console.log("hello"+ this.age)
    }

}

// user. greet();

//compare in event listeners
 document.getElementById("btn").addEventListener("click",function(){
    console.log(this)
 })

 // in arrow function
 document.getElementById("btn").addEventListener("click",()=>{
    console.log(this)
 })