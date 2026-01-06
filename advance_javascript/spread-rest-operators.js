//1. Spread Operator
// use it to expand arrays or objects
// spread in arrays
 const fruit =["apple","banana"];
 const morefruits = ["mango",...fruits];

 console.log(morefruits)

 // spread in objects
  const user1 ={ name:"nepal", location:"pokhara"};
  const user2 = { age:30, ...user};
   console.lo(user2)

   // real life use
   //clone or merge or concate
    const x =[1]
    const y =[2]
//2. Rest operator(gather items)
 function sum(...nums){
    console.log(nums)

    return nums.reduce((a,b) => a+b,0);
}
sum(1,2,3)
// rest operator in object Destructurning
const user3 ={name:"minz",age:"30",city:"ktm"};

const{name, ...rest}=user3;
console.log(rest)
// real life use:
// accept dynamic function argruments
// seperate known an unknown object properties
