//goal of fetch-dom
//- fetch data from an API
//-convert resonse to JSON
//- use async/await
//-Handle error with try-catch
//-show data in the browser

const userList = document.getElementById("user-list");

async function fetchUsers(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        //to check resonse
        if(!response.ok){
            throw new Error("Failed to fetch users");
        }
        const users = await response.json();

        users.forEach(user =>{
            const li = document.createElement("li");
            li.textConent =` ${user.name}(${user.email})`;
            userList.appendChild(li);
        });

    }
    catch (error){
        console.error("Error:",error.message);
        userList.innerHTML ="<li> Something went wrong!</li>";
        }
}
//call function
fetchUsers();