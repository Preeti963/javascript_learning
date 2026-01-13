const usersList = document.getElementById("users");
const todosList = document.getElementById("todos");

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

async function fetchTodos() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );
  return res.json();
}

async function loadData() {
  try {
    const users = await fetchUsers();
    const todos = await fetchTodos();

    // Show users
    users.forEach(user => {
      const li = document.createElement("li");
      li.textContent = user.name;
      usersList.appendChild(li);
    });

    // Show todos
    todos.forEach(todo => {
      const li = document.createElement("li");
      li.textContent = todo.completed
        ? `~${todo.title}`
        : `x ${todo.title}`;
      todosList.appendChild(li);
    });

  } catch (error) {
    console.error("Error loading data", error);
  }
}

loadData();
