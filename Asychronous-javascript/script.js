// title : what is Aschronous Javascript
// lets take an example 
// so, imagine you go to a resturant and order food. while the food is being coocked,you
//don't just sit there doing nothing - you might scroll your phone, talks to frinds,or
// order a drink. that's how asynchrous javascript works. it cam start a task, ad while that task is in  progress- like fetching data from an API
// javascript can keep doing other things.
// the opposite of this sunchronous code, where everthing happens one after another
// and if somethings takes time, the rest of your program waits. and that's exactly what we'll explore next.

// this is called synchronous
console.log("starting")
console.log("processing")
console.log("End")

// for the asychronous
 console.log("star")
 setTimeout(() => {
    console.log("processing")
 },1000)

 console.log("End")
 console.log("hello")

//  js is not asychronous
// javascript is  single- thread programming languages
// java is  multiple programing lanaguage

