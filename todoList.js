const addtaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addtaskBtn.addEventListener("click", function(){
    const taskText = taskInput.value.trim();
    
    if(taskText ===""){
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent="X";
    deleteBtn.addEventListener("click", function(){
        li.remove(); 
    })

    li.appendChild(deleteBtn);
     taskList.appendChild(li)
     taskInput.value=""
})
