// what is destructing
//1. array destructuring
const numbers =[10,20,30];

//old way
const first = numbers[0];
const second = numbers[1];
console.log(second)

// destructuring
const [hello]= numbers;

//2. object Destrustion 
 const user = {
     name: "Jhon",
     age:"30",
     country:"Nepal",
     email:"contact@gmail.com"

 };

 // destructring
  const {name,age}= user;
  function greet({name,age,country}){
    console.log(name,age,country)
}
greet(user)

//3. Default Values
 const {email = "java@gmail.com"}=user;// when email is not given the default values can be used
 console.log(email)

 //4. Nested Destructiong
const profile = {
    info: {
        username:"hi",
        location:"Nepal"
    }
};

const{info:{username}}= profile;
console.log(username)