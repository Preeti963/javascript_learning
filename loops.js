// What is a loop 
// A lop lets us to run the same block of code again and again 
// until a cetain  condition

//Types of loop
//1. for loop
for(let i =1; i <=5; i++){
    console.log("Clap number", i)
}
// let i = 1 ( start form 1)
// i<=5 ( run as long as i is less then or equal to 5)
// i++ increase i by 1 each time

// for -
for(let i =5; i >1; i--){
    console.log("Clap number", i)
}
//2. while loop
let count = 1;
 while (count <=3){
    console.log("Hello");
    count++;
}
// This loop will run while the condition count <=3 is true.

//3. do while loops
let num =1;
do{
    console.log("Hello Javascript")
    num++
}while (num <= 3);
// enven if the conditon is false,do while runs at least one time.
