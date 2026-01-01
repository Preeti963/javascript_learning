//1. for each method
const nums=[1,2,3];
nums.forEach(function(item){
    // console.log(item)// it does not return
})
//2. map ( transfer items)
 const output1 = nums.map(function(item){
    return item * 2;// not multiply we can remove 2
 })
//  console.log(output1)//every item is multiply by 2 and reate new array
 // in nums for [1,2,3] this are multily by 2 and gives [2,4,6]

 // if we want to  repate name then we can do this
 const output2 = nums.map(function(item){
    return "hello";
 })
//  console.log(output2)
//3. filter (it store when the value is true and  false when it does not)
const ages =[16,20,30,45,12,32,11,10];

 const adults = ages.filter(function(ages){
    if(ages > 18){
        return true;
    }else{
        return false;
    }
 });
  console.log(adults)
