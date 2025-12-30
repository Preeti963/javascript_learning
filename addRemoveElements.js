// Add elemnets with Javascript

const addBtn = document.getElementById("addBtn");
const itemList = document.getElementById("itemList");

let count =1;
addBtn.addEventListener("click",function(){
    const li =document.createElement("li");
    li.textContent ="Item"+ count;
    
    itemList.appendChild(li);
    count++;
    //count = count +1
})

// remove
const removeBtn = document.getElementById("removeBtn");
removeBtn.addEventListener("click",function(){
    const lastItem =itemList.lastElementChild;

    lastItem.remove()
    console.log(lastItem)
})