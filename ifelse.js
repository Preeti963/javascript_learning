//Title : waht is an If-Else Statement?
// An if Statement lets your code make decisions
// It check if some ting is true and runs code  base on that

// Basic if Statement
let age = 18;
if(age > 18){
    // console.log("You can vote")
}
// here, javascript checks the condition age > 18
// it is true, it run the code inside the{}

//Title: IF Else statment
let color ="red";
if(color === "red") {
    // console.log("color is red")
} else{
    // console.log("colur is not red")

}

// if condition is false, it jumps to the else block
// Title: Else if Statment

let score =85;

if(score> 90){
    console.log("Grade A")
}else if (score>= 80){
    console.log("Grade B")
}else{
    console.log("keep trying")
}
//Use else if when you have more than two options

// Bonus:using if inside a function
 function checkLogin(isLoggedIn){
    if (isloggedIn){
        console.log("Welcome back");
    }else {
        console.log("Please login ")
    }
 }
 checkLogin(true)