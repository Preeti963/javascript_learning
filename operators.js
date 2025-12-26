// operators
//1. Arthimetic operators
let a=10;
let b=3;
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

//2.Assignment operators
let x=5
x+=2; // x=x+2
x-+4; // x=x-4
x*=2; // x=x*2
x/=3; //x=x/4

//3. comparision operators
//used to compare value(result are true or false)

console.log(5=="5") // true (loose equality)
console.log(5==="5") // false (strict equality)[5 is number while "5" is string]
console.log(5!=4) // true
console.log(5!=="5") // true
console.log(10>5) // true
console.log(3<3) // false

//4. logical operators
//used to combine conditions

let isloggedIn = true;
let isAdmin = false;
console.log(isloggedIn && isAdmin)// output: false

// && (AND)= both must be true
// || (OR) = at least 1 must be true
// ! (NOT) = flips the value

//example of NOT(!)
console.log(! isAdmin); // output: true

