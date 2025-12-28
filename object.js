// What are object
/// object is away to store related data together in a single variable using jey value pairs
 let person ={
    name1:"Ram",
    age:25,
    isStudent:true
 };

 // Title: key value pairs
 // key( also called properties) are lable ("name")

 // values can be anuthing: string, numbers, arrya, even other objects

 // acessing object values
  console.log(person.name1)
  console.log(person.age)
  console.log(person["name"])
  // adding or up dating properties
   person.city="Humla"
   console.log(person)

   // deleting properties
   delete person.age;
   console.log(person)
   // objects inside arrays
   //you can store multiples objects in an array
    let user =[{
        name1:"Ram",age:25
    }, {
        name2:"Zen",age:19
    }];
    console.log(user[1])

    // if we have to select specific we have to use (.) like this
    //example
    console.log(user[0].age);