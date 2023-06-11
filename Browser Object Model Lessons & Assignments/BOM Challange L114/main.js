let input = document.querySelector(".input");
let add = document.querySelector(".add");
let tasks = document.querySelector(".tasks");

// Load saved tasks from Local Storage on page load
window.addEventListener("load", loadTasks);

add.addEventListener("click", addTask);

function addTask() {
    let taskText = input.value.trim();
    if (taskText !== "") {


    let task = document.createElement("p");
    task.textContent = taskText;

    let div = document.createElement("div");
    let deleteTask = document.createElement("a");
    deleteTask.className = "delete-task";
    deleteTask.textContent = "Delete";

    div.appendChild(task);
    div.appendChild(deleteTask);
    input.value = "";
    tasks.style.backgroundColor = "#cccccc69";
    tasks.appendChild(div);
    deleteTask.addEventListener("click", () => {
        div.remove();
        tasks.style.backgroundColor = tasks.children.length === 0 ? "#fff" : "#cccccc69";
      saveTasks(); // Update Local Storage after deleting a task
    });

    saveTasks(); // Save tasks to Local Storage
    }
}

function saveTasks() {
    let taskElements = tasks.querySelectorAll("p");
    let taskList = [];
    taskElements.forEach((taskElement) => {
    taskList.push(taskElement.textContent);
});

    localStorage.setItem("tasks", JSON.stringify(taskList));
}

function loadTasks() {
    let savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        let taskList = JSON.parse(savedTasks);
        taskList.forEach((taskText) => {
        let task = document.createElement("p");
        task.textContent = taskText;
    let div = document.createElement("div");
    let deleteTask = document.createElement("a");
    deleteTask.className = "delete-task";
    deleteTask.textContent = "Delete";

    tasks.appendChild(div);
    div.appendChild(task);
    div.appendChild(deleteTask);
    tasks.style.backgroundColor = "#cccccc69";
    deleteTask.addEventListener("click", () => {
        div.remove();
        tasks.style.backgroundColor = tasks.children.length === 0 ? "#fff" : "#cccccc69";
        saveTasks(); // Update Local Storage after deleting a task
    });
});
}
}
