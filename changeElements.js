//Change Text with TextContain
const title = document.getElementById("main-heading");
// title.textContent = "Welcome to home page";
// this replace only the text

//change html with innerHTML
const message = document.getElementById("message");
// message.innerHTML= "<strong>This is the bold text!</strong>";

// Change style with style
//  title.style.color ="blue";
//  title.style.backgroungColor = "gray"

// using Event(while clicking it change)
 const button = document.getElementById("clickMe");

 button.addEventListener("click", function(){
    this.title.textContent = "Hello Js";
    message.innerHTML ="<strong> thi  is a bold text !</strong>"
    title.style.color ="blue";
    title.style.backgroungColor = "gray"
 })