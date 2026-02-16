document.addEventListener("DOMContentLoaded", function () {

  const todoButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");
  const todoInput = document.getElementById("todo-input");

  let tasks = JSON.parse(localStorage.getItem("task")) || [];

  tasks.forEach(task => render(task));

  todoButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    tasks.push(newTask);
    saveTasks();
    render(newTask);
    todoInput.value = "";
  });

  function render(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);

    if (task.completed) {
      li.classList.add("completed");
    }

    li.innerHTML = `
      <span>${task.text}</span>
      <button>delete</button>
    `;

    // Toggle completed
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTasks();
    });

    // Delete task
    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();

      tasks = tasks.filter(t => t.id !== task.id);//will filter the button that is not selected 
      li.remove();//remove from the frontend
      saveTasks();//willl again save the task in the frontend
    });

    todoList.appendChild(li);
  }

  function saveTasks() {
    localStorage.setItem("task", JSON.stringify(tasks));
  }
});
