const form = document.getElementById("myform");
const error =document.getElementById("error");

form.addEventListener("submit", function(e){
    e.preventDefault(); //usinf e (parameter)
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
   const password = document.getElementById("password").value;
    

    // if(username ===""){
    //     // console.log("username is empty")
    //     error.textContent = "user name is repuired.";
    //     return;
    // }
    // if(email ===""){
    //     error.textContent = "Email is required.";
    //     return;

    // }
    // if(password ===""){
    //     error.textContent = "password is required.";
    //     return;
    // }
    // or we can use this method too
    // this for all field to be filles
   if (username ==="" || email===""|| password===""){
        error.textContent ="All Field are required.";
        return;
    }
    if(password.length < 6) {
        error.textContent="Password must be at least  6 character long"
        return;
    }
    error.textContent="";
    alert("Form submittted succesfully")
    form.reset()

})