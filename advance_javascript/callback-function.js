// what is call back function
// A callback  is a function that you pass as an argument to another function
// taht other function can call it later when a task is complete

function greet(name,callback){
    console.log("hello"+name);
    callback();
}
function sayBye(){
    console.log("bye");
}
// greet("Zinz",sayBye);
//Anonyous functionas a callback
greet("sita", function(){
    console.log("see you later")
})
// Real lifeexample: setTimeout
setTimeout(function(){
    console.log("3 second later")
},3000);// 3 sec
const item = [1,2,3];
items.forEach(function(item){
    console.log(item)
})