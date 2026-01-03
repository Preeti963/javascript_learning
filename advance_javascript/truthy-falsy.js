//what is truthy and falsy
 // in javascripit, every value is either truthy or falsy when used in a boolean context

 // structured
 if(value){
    // truthy value come here
}else{
    //falsy values come here
}
// falsy values
//there are only 7 falsy values in javascripit
// false, 0, -0 ,On (big intger), "",null, undefined, NaN(not a number)

// example
 if(false){
    console.lo("if block")
}else{
    console.log("else block")
}
// 
const x = 123;
if(value){
    //truthy values comes here
    console.lo("if block")
}else{
    //falsy values come here
    console.log("else block")
}
// truthy values
 const username="";// "" string makes the value truthy
  if (!username){
    console.log("Username entered")
  }