const postsContainer = document.getElementById("posts");
const loading = document.getElementById("loading");

async function fetchPosts(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        const postsData = await response.json();
        displayPosts(postsData);
    }catch (error){
        console.error("Error fetching posts:",error);
    }
}

function displayPosts(data){
    loading.style.display = "none";  // hide loading
    data.forEach(post => {
        const li = document.createElement("li");
        li.textContent = post.title;
        postsContainer.appendChild(li);
    });
}

fetchPosts();
