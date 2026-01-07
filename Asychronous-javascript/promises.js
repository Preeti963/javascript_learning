//what is promise?
// promise is just an object that represent a task that will finish in the future
// it can either succeed or fail - but you don't know when.

//simple example
//Imagine you order food online
//The app immediately gives you a promise
//we'll deliver your food soon

//later it either fullfilled(food arrivers)or rejected(order canceled)
//Thats exactlly how promises woek in javascript 

//2. promises states
//every promise goes through three states;\:
// pending -> wating
// fullfilled -> completed successfully
//rejected -> failed

const orderFood = new Promise(function(resolve, rejected){
    const isAvailable= ture;

    if(isAvailable){
        resolve("Your order is on the way")
    }else{
        rejected("sorry, we're out of service")
    }
})