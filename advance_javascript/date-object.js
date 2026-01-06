// creating a Date
//  const now = new Date()
//  console.log(now)
//  to know its  type(typeof now) and 
//for present date  new Date()

const now = new Date();

 const birthday = new Date("2025-02-07");
 console.log(birthday);
 //0 = jan
 //11= Dec

 // usesful get methods
  const today = new Date();
  console.log(today.getFullYear())
  console.log(today.getHours());

  //set methods
   const date = new Date();

   date.setFullYear(2000)
   date.setMonth(0)
   console.log(date)

   //date formating
   console.log(date.toISOString())
